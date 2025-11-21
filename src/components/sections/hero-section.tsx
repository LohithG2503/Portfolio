'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download, Send } from 'lucide-react';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import SplitText from '@/components/ui/split-text';
import { motion } from 'framer-motion';

const profileImage = PlaceHolderImages.find(p => p.id === 'profile');

export default function HeroSection() {
  return (
    <section id="about" className="py-8 md:py-12 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1]
        }}
        className="rounded-2xl bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-indigo-900/40 backdrop-blur-xl border border-purple-500/30 p-6 md:p-8 lg:p-12 shadow-2xl relative overflow-hidden"
      >
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10">
          <div className="md:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline tracking-tight text-white">
                <SplitText animation="fadeInUp" delay={0.3} stagger={0.03}>
                  Hi, I'm Lohith G
                </SplitText>
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-white/90">
                <SplitText animation="fadeInUp" delay={0.5} stagger={0.02}>
                  Certified Penetration Tester (CPT) | Cybersecurity & Digital Forensics Specialist | Hardware Technician
                </SplitText>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-base md:text-lg text-white/80 leading-relaxed"
            >
              I'm a <strong className="text-white">Certified Penetration Tester (CPT)</strong> specializing in cybersecurity and digital forensics. My unique background combines hands-on hardware diagnostics at the chip and BIOS level with advanced security expertise in vulnerability assessment, malware investigation, and digital evidence acquisition. I've engineered a personal DFIR lab environment using VirtualBox, SIFT Workstation, and centralized logging with Sysmon and NXLog for safe malware analysis and threat hunting. Proficient in industry-standard tools like Wireshark, Nmap, Burp Suite, Metasploit, Autopsy, and Kali Linux, I analyze security threats from the physical hardware layer up. Beyond security, I've developed full-stack AI-powered applications and IoT prototypes, bringing a comprehensive perspective to building secure, intelligent systems that protect against real-world cyber threats.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.4, 
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link href="/portfolio#contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-purple-400/30 shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                >
                  Get in Touch <Send className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="/LohithG-Resume-Latest.pdf" download>
                <Button
                  size="lg" 
                  variant="outline"
                  className="bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 backdrop-blur-sm shadow-lg"
                >
                  Download CV <Download className="ml-2 h-4 w-4 text-white" strokeWidth={2.5} />
                </Button>
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: 0.25, 
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="flex justify-center md:justify-end"
          >
            {profileImage && (
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/50 to-blue-500/50 rounded-full blur-2xl animate-pulse" />
                <Image
                  src={profileImage.imageUrl}
                  alt="Lohith G"
                  width={300}
                  height={300}
                  className="relative rounded-full object-cover border-4 border-purple-400/30 shadow-2xl ring-4 ring-purple-500/20"
                  data-ai-hint={profileImage.imageHint}
                  priority
                />
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
