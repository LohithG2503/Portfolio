'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextType from '@/components/ui/text-type';
import SpaceBackground from '@/components/backgrounds/space-background';
import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';

interface WelcomeScreenProps {
  onEnter: () => void;
}

export default function WelcomeScreen({ onEnter }: WelcomeScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleEnter = () => {
    setIsVisible(false);
  };

  if (!isMounted) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait" onExitComplete={onEnter}>
      {isVisible && (
        <motion.div
          key="welcome"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <SpaceBackground starCount={40} nebulaCount={1} />
          <div className="relative z-10 flex flex-col items-center justify-center space-y-8 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="text-center"
            >
              <TextType
                text="Welcome to my portfolio"
                as="h1"
                className="text-4xl md:text-6xl font-bold text-white mb-4"
                typingSpeed={60}
                initialDelay={200}
                showCursor={true}
                cursorCharacter="|"
                cursorBlinkDuration={0.8}
                textColors={['#ffffff']}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 1.2,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <Button
                onClick={handleEnter}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm bg-opacity-90 border border-white/20 active:scale-95"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Enter Portfolio
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

