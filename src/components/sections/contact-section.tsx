'use client';

import { Button } from '@/components/ui/button';
import { contactData } from '@/lib/data';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import SplitText from '@/components/ui/split-text';
import { motion } from 'framer-motion';

function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 font-headline text-white">
            <SplitText animation="fadeInUp" delay={0.1} stagger={0.02} startOnVisible={true}>
                {children}
            </SplitText>
        </h2>
    );
}

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 relative z-10 min-h-[400px]">
      <SectionTitle>Get In Touch</SectionTitle>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-indigo-900/50 backdrop-blur-xl border border-purple-500/40 rounded-2xl p-6 md:p-8 shadow-xl"
      >
        <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8 leading-relaxed">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to reach out.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Link href={`mailto:${contactData.email}`} className="w-full sm:w-auto">
                <Button 
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-purple-400/30 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-sm md:text-base"
                >
                    <Mail className="mr-2 h-4 w-4" /> 
                    <span className="truncate max-w-[200px] sm:max-w-none">{contactData.email}</span>
                </Button>
            </Link>
            <div className="flex items-center gap-2">
                {contactData.socials.map((social) => (
                    <Link key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          aria-label={social.name}
                          className="bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 backdrop-blur-sm transition-all duration-200 shadow-lg"
                        >
                            <social.icon className="h-5 w-5 text-white" strokeWidth={2.5} />
                        </Button>
                    </Link>
                ))}
            </div>
        </div>
      </motion.div>
    </section>
  );
}
