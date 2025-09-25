'use client';

import { usePathname } from 'next/navigation';
import FooterSection from '@/components/layout/sections/footer';

export default function ConditionalFooter() {
  const pathname = usePathname();

  if (pathname !== '/') {
    return null;
  }

  return <FooterSection />;
}
