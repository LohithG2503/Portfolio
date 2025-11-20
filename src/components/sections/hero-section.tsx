'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download, Send } from 'lucide-react';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const profileImage = PlaceHolderImages.find(p => p.id === 'profile');

export default function HeroSection() {
  return (
    <section id="about" className="py-12 animate-fade-in-up rounded-lg bg-primary/20 backdrop-blur-md border-primary/20 p-8 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10">
        <div className="md:col-span-2 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-primary">
            Hi, I'm Lohith G
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-foreground/80">
            Hardware Technician | Certified Penetration Tester (CPT) | Full-Stack Developer
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            As a Computer Hardware Technician and Certified Penetration Tester, I bridge the gap between physical hardware and digital security. My experience ranges from chip-level repairs and firmware diagnostics to hands-on vulnerability assessments using tools like Wireshark, Nmap, and Kali Linux. I thrive on understanding systems at a deep level to secure them against real-world threats. My passion for technology also extends to software, where I've led the development of full-stack, AI-powered web applications and built IoT prototypes with Arduino. I aim to combine this unique, full-stack perspective to build smarter, safer technology.
          </p>
          <div className="flex space-x-4 pt-4">
            <Link href="#contact">
              <Button size="lg">
                Get in Touch <Send className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="/Lohith_G_Resume.pdf" download>
              <Button size="lg" variant="outline">
                Download CV <Download className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          {profileImage && (
            <Image
              src={profileImage.imageUrl}
              alt="Lohith G"
              width={300}
              height={300}
              className="rounded-full object-cover border-4 border-primary/20 shadow-lg"
              data-ai-hint={profileImage.imageHint}
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
}
