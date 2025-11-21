'use client';

import { certificationsData } from '@/lib/data';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import SplitText from '@/components/ui/split-text';
import { motion } from 'framer-motion';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-12 relative z-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 font-headline text-white">
        <SplitText animation="fadeInUp" delay={0.1} stagger={0.02} startOnVisible={true}>
          Certifications
        </SplitText>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {certificationsData.map((cert, index) => (
          <Dialog key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <Card
                className="group overflow-hidden bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-indigo-900/40 backdrop-blur-xl border border-purple-500/30 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-2"
              >
              <DialogTrigger asChild>
                <div className="p-4 cursor-pointer">
                  <div className="relative h-48 w-full bg-muted rounded-md flex items-center justify-center overflow-hidden border border-white/10">
                    <img
                      src={cert.image.imageUrl}
                      alt={cert.title}
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={cert.image.imageHint}
                    />
                  </div>
                </div>
              </DialogTrigger>
              <CardContent className="p-4 pt-0">
                <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                <p className="text-sm text-white/70 mt-1">
                  {cert.institution}
                </p>
                {cert.description && (
                  <p className="text-sm font-bold text-white/90 mt-2">{cert.description}</p>
                )}
              </CardContent>
            </Card>
            </motion.div>
            <DialogContent className="max-w-4xl h-[90vh] bg-gradient-to-br from-purple-900/95 via-blue-900/95 to-indigo-900/95 backdrop-blur-xl border border-purple-500/30 text-white overflow-hidden">
              <DialogHeader>
                <DialogTitle className="text-white">{cert.title}</DialogTitle>
              </DialogHeader>
              <div className="relative h-[calc(90vh-120px)] w-full overflow-auto">
                <img
                  src={cert.image.imageUrl}
                  alt={cert.title}
                  className="w-full h-auto max-h-full object-contain mx-auto"
                  data-ai-hint={cert.image.imageHint}
                />
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}
