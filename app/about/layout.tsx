import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Meet the passionate artists behind Manan Bajaj Portfolio. Discover our philosophy and our journey in capturing love stories.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
