import { Button } from '@/components/ui/button';
import { contactData } from '@/lib/data';
import { Mail } from 'lucide-react';
import Link from 'next/link';

function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-3xl font-bold text-center mb-12 font-headline text-primary">
            {children}
        </h2>
    );
}

export default function ContactSection() {
  return (
    <section id="contact" className="py-12">
      <SectionTitle>Get In Touch</SectionTitle>
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-lg text-muted-foreground mb-8">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to reach out.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={`mailto:${contactData.email}`}>
                <Button size="lg">
                    <Mail className="mr-2 h-4 w-4" /> {contactData.email}
                </Button>
            </Link>
            <div className="flex items-center gap-2">
                {contactData.socials.map((social) => (
                    <Link key={social.name} href={social.url} target="_blank">
                        <Button variant="outline" size="icon" aria-label={social.name}>
                            <social.icon className="h-5 w-5" />
                        </Button>
                    </Link>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
