import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Booking',
  description: 'Get in touch to book your consultation for bridal makeup or wedding photography. We would love to hear from you.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
