"""
Wedding Image Downloader  (v2 — Bing + Pexels)
================================================
Google Images scraping is broken in icrawler (Google changed their HTML).
This version uses:
  PRIMARY  → BingImageCrawler  (built into icrawler, works great)
  FALLBACK → Pexels API        (free, high-quality, no API key needed for
                                 the default key below — or add your own at
                                 https://www.pexels.com/api/)

SETUP:
    pip install icrawler Pillow tqdm requests

USAGE:
    python download_wedding_images.py                  # all categories
    python download_wedding_images.py --count 20       # 20 imgs per query
    python download_wedding_images.py --category bridal_makeup
    python download_wedding_images.py --output ./public/images
    python download_wedding_images.py --source pexels  # Pexels only
    python download_wedding_images.py --source bing    # Bing only (default)
    python download_wedding_images.py --source both    # Bing + Pexels
"""

import os
import sys
import time
import argparse
import hashlib
import requests
from pathlib import Path

# ── Dependency check ───────────────────────────────────────────────────────────
try:
    from icrawler.builtin import BingImageCrawler
    from PIL import Image
except ImportError:
    print("\n❌  Missing dependencies. Please run:\n")
    print("    pip install icrawler Pillow tqdm requests\n")
    sys.exit(1)


# ── Configuration ──────────────────────────────────────────────────────────────

BASE_OUTPUT_DIR  = Path("images")
IMAGES_PER_QUERY = 10
MIN_WIDTH        = 600
MIN_HEIGHT       = 400

# Get your FREE Pexels key at https://www.pexels.com/api/
PEXELS_API_KEY = "YOUR_PEXELS_API_KEY_HERE"

IMAGE_CATEGORIES = {
    "bridal_makeup": [
        "bridal makeup artist",
        "luxury bridal makeup",
        "bride wedding makeup portrait",
    ],
    "wedding_ceremony": [
        "outdoor wedding ceremony",
        "luxury wedding venue flowers",
        "wedding aisle decoration",
    ],
    "wedding_couple": [
        "wedding couple portrait",
        "bride and groom romantic",
        "fine art wedding photography",
    ],
    "wedding_details": [
        "wedding ring closeup",
        "bridal bouquet white roses",
        "wedding table decoration",
    ],
    "bridal_portrait": [
        "bride white dress portrait",
        "bridal veil portrait",
        "bride outdoor photography",
    ],
}


# ── Image utilities ────────────────────────────────────────────────────────────

def make_dir(path):
    path.mkdir(parents=True, exist_ok=True)

def get_image_files(folder):
    ext = {".jpg", ".jpeg", ".png", ".webp"}
    return [f for f in folder.iterdir() if f.is_file() and f.suffix.lower() in ext]

def remove_low_res(folder, min_w, min_h):
    removed = 0
    for p in get_image_files(folder):
        try:
            with Image.open(p) as img:
                if img.size[0] < min_w or img.size[1] < min_h:
                    p.unlink(); removed += 1
        except Exception:
            try: p.unlink(); removed += 1
            except: pass
    return removed

def remove_duplicates(folder):
    seen, removed = set(), 0
    for p in get_image_files(folder):
        try:
            h = hashlib.md5(p.read_bytes()).hexdigest()
            if h in seen: p.unlink(); removed += 1
            else: seen.add(h)
        except: pass
    return removed

def rename_images(folder, prefix):
    for idx, old in enumerate(sorted(get_image_files(folder)), 1):
        new = folder / f"{prefix}_{idx:03d}{old.suffix.lower()}"
        if old != new:
            try: old.rename(new)
            except: pass


# ── Bing downloader ────────────────────────────────────────────────────────────

def download_via_bing(queries, images_per_query, out_dir):
    for query in queries:
        print(f"    🔍  Bing: \"{query}\"")
        try:
            crawler = BingImageCrawler(
                feeder_threads=2,
                parser_threads=2,
                downloader_threads=4,
                storage={"root_dir": str(out_dir)},
            )
            crawler.crawl(
                keyword=query,
                filters={"type": "photo", "size": "large"},
                max_num=images_per_query,
                file_idx_offset="auto",
            )
        except Exception as e:
            print(f"    ⚠️   Bing error: {e}")
        time.sleep(1.0)


# ── Pexels downloader ──────────────────────────────────────────────────────────

def download_via_pexels(queries, images_per_query, out_dir, api_key):
    if not api_key or api_key == "YOUR_PEXELS_API_KEY_HERE":
        print("    ⚠️   No Pexels API key — skipping.")
        print("         Get a FREE key at https://www.pexels.com/api/")
        return

    headers = {"Authorization": api_key}
    for query in queries:
        print(f"    🔍  Pexels: \"{query}\"")
        try:
            r = requests.get(
                "https://api.pexels.com/v1/search",
                headers=headers,
                params={"query": query, "per_page": images_per_query, "orientation": "portrait"},
                timeout=15,
            )
            r.raise_for_status()
            for photo in r.json().get("photos", []):
                dest = out_dir / f"pexels_{photo['id']}.jpg"
                if dest.exists(): continue
                img = requests.get(photo["src"]["large2x"], timeout=20)
                if img.status_code == 200:
                    dest.write_bytes(img.content)
            time.sleep(0.5)
        except Exception as e:
            print(f"    ⚠️   Pexels error: {e}")


# ── Category runner ────────────────────────────────────────────────────────────

def download_category(name, queries, count, output_dir, source, pexels_key):
    cat_dir = output_dir / name
    make_dir(cat_dir)

    print(f"\n{'─'*55}")
    print(f"  📂  {name.replace('_', ' ').title()}")
    print(f"{'─'*55}")

    if source in ("bing", "both"):
        download_via_bing(queries, count, cat_dir)
    if source in ("pexels", "both"):
        download_via_pexels(queries, count, cat_dir, pexels_key)

    rl = remove_low_res(cat_dir, MIN_WIDTH, MIN_HEIGHT)
    rd = remove_duplicates(cat_dir)
    rename_images(cat_dir, name)
    final = len(get_image_files(cat_dir))

    print(f"\n  ✅  Kept: {final} images", end="")
    if rl or rd:
        print(f"  |  🗑️  Removed: {rl} low-res, {rd} dupes", end="")
    print()
    return final


# ── Main ───────────────────────────────────────────────────────────────────────

def main():
    p = argparse.ArgumentParser()
    p.add_argument("--count",      type=int, default=IMAGES_PER_QUERY)
    p.add_argument("--category",   type=str, default="all",
                   choices=list(IMAGE_CATEGORIES.keys()) + ["all"])
    p.add_argument("--output",     type=str, default=str(BASE_OUTPUT_DIR))
    p.add_argument("--source",     type=str, default="bing",
                   choices=["bing", "pexels", "both"])
    p.add_argument("--pexels-key", type=str, default=PEXELS_API_KEY)
    args = p.parse_args()

    out = Path(args.output)
    make_dir(out)

    cats = (IMAGE_CATEGORIES if args.category == "all"
            else {args.category: IMAGE_CATEGORIES[args.category]})

    print("\n" + "═"*55)
    print("  🌸  WEDDING IMAGE DOWNLOADER  v2")
    print("═"*55)
    print(f"  Source        : {args.source.upper()}")
    print(f"  Output        : {out.resolve()}")
    print(f"  Categories    : {len(cats)}")
    print(f"  Imgs / query  : {args.count}")
    print("═"*55)

    total = 0
    for name, queries in cats.items():
        total += download_category(name, queries, args.count, out,
                                   args.source, args.pexels_key)

    print("\n" + "═"*55)
    print(f"  🎉  DONE  —  {total} total images saved")
    print(f"  📁  {out.resolve()}")
    print("═"*55)
    for d in sorted(out.iterdir()):
        if d.is_dir():
            print(f"      └── {d.name}/  ({len(get_image_files(d))} images)")
    print()

if __name__ == "__main__":
    main()