'use client';

import { Toaster } from '@/components/ui/toaster';
import ConditionalHeader from '@/components/layout/conditional-header';

interface ClientLayoutProps {
    children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
    return (
        <>
            <ConditionalHeader />
            <main>{children}</main>
            <Toaster />
        </>
    );
}
