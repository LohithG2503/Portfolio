'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { educationData } from '@/lib/data';
import { GraduationCap } from 'lucide-react';
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

export default function EducationSection() {
  return (
    <section id="education" className="py-8 md:py-12 relative z-10">
      <SectionTitle>Education</SectionTitle>
      <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
        {educationData.map((edu, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.15, duration: 0.5 }}
             >
               <Card className="bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-indigo-900/40 backdrop-blur-xl border border-purple-500/30 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full backdrop-blur-sm">
                        <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <CardTitle className="text-white">{edu.degree}</CardTitle>
                        <CardDescription className="text-white/70">{edu.institution}</CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-white/70">{edu.period}</p>
                    <p className="mt-2 font-bold text-white/90">{edu.description}</p>
                </CardContent>
            </Card>
            </motion.div>
        ))}
      </div>
    </section>
  );
}
