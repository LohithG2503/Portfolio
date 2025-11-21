'use client';

import { usePathname } from 'next/navigation';
import Header from './header';

export default function ConditionalHeader() {
  const pathname = usePathname();
  
  // Only show header on portfolio page, not on welcome page
  if (pathname === '/') {
    return null;
  }
  
  return <Header />;
}

