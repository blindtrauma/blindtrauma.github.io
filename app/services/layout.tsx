import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services & Pricing',
  description: 'Explore our luxury bridal makeup and wedding photography packages. Tailored services for your special day.',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
