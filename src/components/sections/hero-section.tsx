'use client';

import { Button } from '@/components/ui/button';
import { Download, Send } from 'lucide-react';
import Link from 'next/link';
import SplitText from '@/components/ui/split-text';
import { motion } from 'framer-motion';

// profile image removed — headshot not required for now

export default function HeroSection() {
  return (
    <section id="about" className="pb-8 pt-2 md:pb-12 md:pt-4 relative z-10">
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
                <span className="inline-block">Certified Penetration Tester (CPT)</span>
                <span className="mx-2">|</span>
                <span className="inline-block">Hardware Technician</span>
                <span className="mx-2">|</span>
                <span className="inline-block">Aspiring CyberSecurity & SOC Analyst</span>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-base md:text-lg text-white/80 leading-relaxed"
            >
              I'm a <strong className="text-white">Certified Penetration Tester (CPT)</strong> specializing in Cybersecurity and SOC Operations. My unique background combines hands-on hardware diagnostics at the chip and BIOS level with advanced security expertise in vulnerability assessment, malware investigation. I've engineered a personal DFIR lab environment using VirtualBox, SIFT Workstation, and centralized logging with Sysmon and NXLog for safe malware analysis and threat hunting. Proficient in industry-standard tools like Wireshark, Nmap, Burp Suite, Metasploit, SIEM, Wazuh, Autopsy, and Kali Linux, I analyze security threats from the physical hardware layer up. Beyond security, I've developed full-stack AI-powered Placements Helper and IoT prototypes, bringing a comprehensive perspective to building secure, intelligent systems that protect against real-world cyber threats.
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
              <a href="/MainResume(NonATS).pdf" download>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 backdrop-blur-sm shadow-lg"
                >
                  Download Resume <Download className="ml-2 h-4 w-4 text-white" strokeWidth={2.5} />
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
            <div className="relative max-w-xs">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/50 to-blue-500/50 rounded-full blur-2xl" />
              <div className="relative rounded-full border-4 border-purple-400/20 bg-white/5 shadow-2xl ring-4 ring-purple-500/10 p-8 flex items-center justify-center h-72 w-72">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white">Lohith G</h3>
                  <p className="mt-2 text-sm text-white/90">Certified Penetration Tester & Aspiring SOC Analyst</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
