export const COLORS = {
  teal: '#5AA7A7',
  mint: '#96D7C6',
  lime: '#BAC94A',
  yellow: '#E2D36B',
  blue: '#6C8CBF',
  cream: '#FDFCF8',
  charcoal: '#1A1A1A',
};

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const STATS = [
  { value: '250+', label: 'Brides Transformed' },
  { value: '180+', label: 'Weddings Photographed' },
  { value: '8 Years', label: 'Of Experience' },
  { value: '12', label: 'Industry Awards' },
];

export const TESTIMONIALS = [
  {
    quote: "Manan Bajaj made me feel like an absolute queen on my wedding day. The photos are breathtaking and the makeup lasted through all the happy tears.",
    name: "Eleanor & James",
    date: "September 2024",
    rating: 5,
  },
  {
    quote: "Their attention to detail is unmatched. They captured moments I didn't even know happened. Truly the best investment for our wedding.",
    name: "Sophia & Michael",
    date: "June 2024",
    rating: 5,
  },
  {
    quote: "I wanted a very natural, editorial look and they delivered beyond my wildest dreams. The photography feels like a Vogue spread.",
    name: "Isabella & Thomas",
    date: "May 2025",
    rating: 5,
  },
  {
    quote: "Professional, calming presence on a chaotic morning, and the final gallery made us speechless. Highly recommend the Manan Bajaj team.",
    name: "Olivia & William",
    date: "October 2023",
    rating: 5,
  }
];

export const PRESS_LOGOS = [
  "Vogue Weddings",
  "Harper's Bride",
  "The Knot",
  "Brides Magazine",
  "Wedding Wire"
];

import { BridalMakeupImages, BridalPortraitImages, WeddingCeremonyImages, WeddingDetailsImages, WeddingCoupleImages } from '@/lib/images';

let _id = 1;
const build = (arr: readonly any[], category: string) =>
  arr.map((img, i) => ({ id: _id++, src: img, category, alt: `${category} ${i + 1}` }));

export const PORTFOLIO_IMAGES = [
  ...build(BridalMakeupImages, 'Bridal Makeup'),
  ...build(BridalPortraitImages.length ? BridalPortraitImages : WeddingCoupleImages, 'Portraits'),
  ...build(WeddingCeremonyImages, 'Ceremonies'),
  ...build(WeddingDetailsImages, 'Details'),
];

export const MAKEUP_PACKAGES = [
  {
    name: "Bloom",
    price: "$450",
    features: ["Wedding Day Makeup", "False Lashes Included", "Mini Touch-up Kit", "Travel within 20 miles"]
  },
  {
    name: "Radiance",
    price: "$750",
    features: ["Pre-Wedding Trial", "Wedding Day Makeup", "Premium Lashes", "Deluxe Touch-up Kit", "Skin Prep Treatment"]
  },
  {
    name: "Manan Bajaj Elite",
    price: "$1,200",
    features: ["Pre-Wedding Trial", "Wedding Day Makeup", "Airbrush Option", "Full Day Touch-ups (8 hrs)", "Rehearsal Dinner Makeup"]
  }
];

export const PHOTO_PACKAGES = [
  {
    name: "Essential",
    price: "$2,800",
    features: ["6 Hours Coverage", "1 Photographer", "Online Gallery", "High-Res Digital Files", "Print Release"]
  },
  {
    name: "Heirloom",
    price: "$4,200",
    features: ["8 Hours Coverage", "2 Photographers", "Engagement Session", "Online Gallery", "Custom USB Drive"]
  },
  {
    name: "Legacy",
    price: "$6,500",
    features: ["Full Day Coverage", "2 Photographers", "Engagement Session", "10x10 Fine Art Album", "Parent Albums (2)"]
  }
];

export const FAQS = [
  { question: "How far in advance should we book?", answer: "We recommend booking 9-12 months in advance, especially for peak wedding season (May-October)." },
  { question: "Do you travel for destination weddings?", answer: "Yes! We love destination weddings. Custom travel quotes are provided based on location." },
  { question: "Can we book just makeup or just photography?", answer: "Absolutely. While we offer a cohesive experience when booked together, our services can be booked independently." },
  { question: "What makeup brands do you use?", answer: "We use luxury, long-wearing brands including Charlotte Tilbury, Armani Beauty, Tom Ford, and Dior." },
  { question: "How many photos will we receive?", answer: "For a standard 8-hour day, you can expect between 600-800 fully edited, high-resolution images." },
  { question: "Do you offer hair styling as well?", answer: "We specialize exclusively in makeup artistry, but we have a trusted list of preferred hair stylists we regularly work with." },
  { question: "When will we get our photos back?", answer: "Sneak peeks are delivered within 48 hours. The full gallery is delivered within 6-8 weeks." },
  { question: "Is a makeup trial required?", answer: "While not required for the 'Bloom' package, we highly recommend it to ensure your vision is perfectly executed on the big day." },
  { question: "Do you provide touch-ups throughout the day?", answer: "Yes, our Manan Bajaj Elite package includes full-day touch-ups (up to 8 hours) to ensure you look flawless from the first look to the last dance." },
  { question: "Can we customize a package?", answer: "Absolutely. We understand every wedding is unique. Contact us with your specific needs, and we'll create a bespoke proposal for you." }
];

export const TEAM_MEMBERS = [
  {
    name: "Elena Rostova",
    role: "Lead Makeup Artist",
    image: BridalPortraitImages[0] ?? WeddingCoupleImages[0],
    bio: "With over a decade of experience in editorial and bridal makeup, Elena brings a refined, artistic touch to every face she paints. Her signature style is \"elevated natural\"—enhancing your features so you look like the absolute best version of yourself.",
    specialties: ["Airbrush Expert", "Editorial Glam", "Skin Prep Specialist"],
    instagram: "@elena.lumiere"
  },
  {
    name: "Julian Hayes",
    role: "Lead Photographer",
    image: BridalPortraitImages[1] ?? WeddingCoupleImages[1] ?? BridalMakeupImages[0],
    bio: "Julian's background in fine art photography informs his cinematic approach to weddings. He has a unique ability to anticipate moments before they happen, capturing the raw emotion and grand romance of your day with a timeless, editorial eye.",
    specialties: ["Film & Digital", "Editorial Style", "Natural Light"],
    instagram: "@julian.lumiere"
  }
];

export const TIMELINE = [
  { year: "2018", title: "The Beginning", desc: "Manan Bajaj Portfolio is founded in a small studio in Brooklyn." },
  { year: "2020", title: "First Publication", desc: "Our work is featured in Vogue Weddings for the first time." },
  { year: "2022", title: "Expansion", desc: "We expand our team and begin taking international destination weddings." },
  { year: "2023", title: "Industry Recognition", desc: "Awarded 'Best Bridal Team' by The Knot." },
  { year: "2025", title: "Present Day", desc: "Celebrating over 250 beautiful brides and counting." }
];
