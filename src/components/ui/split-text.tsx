'use client';

import { useEffect, useRef, ReactNode, useState } from 'react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';

interface SplitTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  animation?: 'fadeInUp' | 'fadeIn' | 'slideIn' | 'scaleIn';
  startOnVisible?: boolean;
}

export default function SplitText({
  children,
  className,
  delay = 0,
  duration = 0.8,
  stagger = 0.02,
  animation = 'fadeInUp',
  startOnVisible = true,
}: SplitTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const charsRef = useRef<HTMLSpanElement[]>([]);
  const hasAnimatedRef = useRef(false);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Only run on client after mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !containerRef.current) return;

    const text = typeof children === 'string' ? children : '';
    if (!text) return;

    const chars = text.split('');

    // Clear existing content and rebuild with spans
    containerRef.current.innerHTML = '';
    charsRef.current = [];

    chars.forEach((char) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      if (containerRef.current) {
        containerRef.current.appendChild(span);
        charsRef.current.push(span);
      }
    });

    const animate = () => {
      // Kill previous animation if exists
      if (animationRef.current) {
        animationRef.current.kill();
      }

      // Reset all chars to initial state
      charsRef.current.forEach(char => {
        gsap.set(char, { opacity: 0, y: 20, x: 0, scale: 0.5 });
      });

      const animations = {
        fadeInUp: {
          opacity: 0,
          y: 20,
        },
        fadeIn: {
          opacity: 0,
        },
        slideIn: {
          opacity: 0,
          x: -20,
        },
        scaleIn: {
          opacity: 0,
          scale: 0.5,
        },
      };

      const from = animations[animation];

      animationRef.current = gsap.fromTo(
        charsRef.current,
        from,
        {
          ...from,
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: duration * 0.6,
          delay: delay * 0.3,
          stagger: stagger * 1.2,
          ease: 'power2.out',
          force3D: false,
          willChange: 'opacity, transform',
        }
      ) as gsap.core.Tween;
    };

    let observer: IntersectionObserver | null = null;

    if (startOnVisible) {
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Reset animation state when entering viewport
              hasAnimatedRef.current = false;
              animate();
              hasAnimatedRef.current = true;
            } else {
              // Reset when leaving viewport so it can animate again
              hasAnimatedRef.current = false;
              if (animationRef.current) {
                animationRef.current.kill();
              }
              // Reset chars to initial state
              charsRef.current.forEach(char => {
                gsap.set(char, { opacity: 0, y: 20, x: 0, scale: 0.5 });
              });
            }
          });
        },
        { threshold: 0.1, rootMargin: '50px' }
      );
      observer.observe(containerRef.current);
    } else {
      animate();
    }

    return () => {
      observer?.disconnect();
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [isMounted, children, delay, duration, stagger, animation, startOnVisible]);

  // Return static text on server, animated text on client
  return (
    <span ref={containerRef} className={cn('inline-block', className)}>
      {children}
    </span>
  );
}
