import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Company Policies | imperium linguistics',
  description: 'Learn about our professional standards, service expectations, and ethical commitments.',
};

export default function PoliciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 