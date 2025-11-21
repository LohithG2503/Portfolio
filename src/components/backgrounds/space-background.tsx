'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface SpaceBackgroundProps {
  className?: string;
  starCount?: number;
  nebulaCount?: number;
}

export default function SpaceBackground({ 
  className = '', 
  starCount,
  nebulaCount
}: SpaceBackgroundProps) {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Optimize for performance: significantly reduce stars and nebulae
  const optimizedStarCount = starCount ?? (isMobile ? 50 : 80);
  const optimizedNebulaCount = nebulaCount ?? (isMobile ? 1 : 2);
  const containerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const nebulaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const starsContainer = starsRef.current;
    if (!starsContainer) return;

    // Create stars
    const stars: HTMLDivElement[] = [];
    const count = optimizedStarCount;
    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      const size = Math.random() * 2 + 0.5;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 3 + 2;
      const delay = Math.random() * 2;

      star.className = 'absolute rounded-full bg-white';
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.opacity = '0.8';
      star.style.boxShadow = `0 0 ${size * 2}px rgba(255, 255, 255, 0.8)`;

      starsContainer.appendChild(star);
      stars.push(star);

      // Animate twinkling - optimized for performance
      const twinkleAnimation = gsap.to(star, {
        opacity: Math.random() * 0.4 + 0.4,
        duration: duration * 1.5,
        delay,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        force3D: false,
        willChange: 'opacity',
      });
      
      // Store animation for cleanup
      (star as any)._gsapAnimation = twinkleAnimation;
    }

    return () => {
      stars.forEach(star => {
        const anim = (star as any)._gsapAnimation;
        if (anim) anim.kill();
        star.remove();
      });
    };
  }, [optimizedStarCount]);

  useEffect(() => {
    const nebulaContainer = nebulaRef.current;
    if (!nebulaContainer) return;

    // Create nebulae
    const nebulae: HTMLDivElement[] = [];
    const colors = [
      'rgba(138, 43, 226, 0.3)', // BlueViolet
      'rgba(75, 0, 130, 0.25)', // Indigo
      'rgba(123, 104, 238, 0.3)', // MediumSlateBlue
      'rgba(72, 61, 139, 0.25)', // DarkSlateBlue
    ];

    const count = optimizedNebulaCount;
    for (let i = 0; i < count; i++) {
      const nebula = document.createElement('div');
      const size = Math.random() * 600 + 400;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const duration = Math.random() * 20 + 15;

      nebula.className = 'absolute rounded-full blur-3xl';
      nebula.style.width = `${size}px`;
      nebula.style.height = `${size}px`;
      nebula.style.left = `${x}%`;
      nebula.style.top = `${y}%`;
      nebula.style.background = `radial-gradient(circle, ${color}, transparent 70%)`;
      nebula.style.opacity = '0.6';

      nebulaContainer.appendChild(nebula);
      nebulae.push(nebula);

      // Animate nebula movement - optimized for performance
      const nebulaAnimation = gsap.to(nebula, {
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        scale: Math.random() * 0.3 + 0.85,
        duration: duration * 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        force3D: false,
        willChange: 'transform',
      });
      
      // Store animation for cleanup
      (nebula as any)._gsapAnimation = nebulaAnimation;
    }

    return () => {
      nebulae.forEach(nebula => {
        const anim = (nebula as any)._gsapAnimation;
        if (anim) anim.kill();
        nebula.remove();
      });
    };
  }, [optimizedNebulaCount]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{
        background: 'radial-gradient(ellipse at center, #1a0a2e 0%, #0a0a1a 50%, #000000 100%)',
      }}
    >
      <div ref={starsRef} className="absolute inset-0" />
      <div ref={nebulaRef} className="absolute inset-0" />
    </div>
  );
}

