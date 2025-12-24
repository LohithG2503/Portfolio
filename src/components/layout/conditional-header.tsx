'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Header from './header';

export default function ConditionalHeader() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render anything until mounted
  if (!isMounted) {
    return null;
  }

  // Only show header on portfolio page, not on welcome page
  if (pathname === '/') {
    return null;
  }

  return <Header />;
}
