import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'A curated collection of our favorite moments, flawless looks, and timeless memories.',
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
