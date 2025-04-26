import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Company Policies | Imperium Linguistics',
  description: 'Learn about our professional standards, service expectations, and ethical commitments.',
};

export default function PoliciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 