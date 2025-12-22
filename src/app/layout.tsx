import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import ClientLayout from '@/components/layout/client-layout';

export const metadata: Metadata = {
  title: 'Lohith G - Cybersecurity & Digital Forensics Portfolio',
  description: 'Certified Penetration Tester (CPT) specializing in cybersecurity, digital forensics, and hardware diagnostics. Portfolio showcasing skills, projects, and experience.',
  icons: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          'min-h-screen font-body antialiased'
        )}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
