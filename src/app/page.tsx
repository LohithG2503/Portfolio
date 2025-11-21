'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

// Lazy load components for better performance
const WelcomeScreen = dynamic(() => import("@/components/welcome-screen"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
    </div>
  ),
});

export default function WelcomePage() {
  const router = useRouter();

  const handleEnter = () => {
    router.push('/portfolio');
  };

  return (
    <Suspense
      fallback={
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
        </div>
      }
    >
      <WelcomeScreen onEnter={handleEnter} />
    </Suspense>
  );
}
