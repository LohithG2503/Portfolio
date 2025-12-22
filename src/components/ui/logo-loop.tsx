'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import { gsap } from 'gsap';

interface LogoItem {
  node?: ReactNode;
  src?: string;
  alt?: string;
  title?: string;
  href?: string;
  name?: string;
}

interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number; // pixels per second
  direction?: 'left' | 'right' | 'up' | 'down';
  logoHeight?: number;
  gap?: number;
  hoverSpeed?: number; // speed when hovering (0 = pause)
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
  className?: string;
}

export default function LogoLoop({
  logos,
  speed = 100,
  direction = 'left',
  logoHeight = 48,
  gap = 40,
  hoverSpeed = 0,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = '#000000',
  ariaLabel,
  className = '',
}: LogoLoopProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [currentSpeed, setCurrentSpeed] = useState(speed);

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  // Handle client-side mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !containerRef.current || !wrapperRef.current) return;

    const wrapper = wrapperRef.current;
    const isVertical = direction === 'up' || direction === 'down';
    const isReverse = direction === 'right' || direction === 'down';

    // Calculate total width/height
    const totalSize = duplicatedLogos.length * (logoHeight + gap);

    // Set wrapper size
    if (isVertical) {
      wrapper.style.height = `${totalSize}px`;
      wrapper.style.width = '100%';
    } else {
      wrapper.style.width = `${totalSize}px`;
      wrapper.style.height = '100%';
    }

    // Create animation with optimized performance
    const animate = () => {
      const effectiveSpeed = isHovered && hoverSpeed !== undefined ? hoverSpeed : currentSpeed;
      const duration = totalSize / effectiveSpeed;

      if (animationRef.current) {
        animationRef.current.kill();
      }

      animationRef.current = gsap.to(wrapper, {
        [isVertical ? 'y' : 'x']: isReverse ? totalSize / 2 : -totalSize / 2,
        duration,
        ease: 'none',
        repeat: -1,
        force3D: false,
        willChange: isVertical ? 'transform' : 'transform',
      });
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      animate();
    }, 50);

    // Update speed when hover changes
    if (isHovered && hoverSpeed !== undefined && animationRef.current) {
      setCurrentSpeed(hoverSpeed);
      animate();
    }

    return () => {
      clearTimeout(timer);
      animationRef.current?.kill();
    };
  }, [isMounted, logos, speed, direction, logoHeight, gap, isHovered, hoverSpeed, currentSpeed, duplicatedLogos.length]);

  const handleMouseEnter = () => {
    if (hoverSpeed !== undefined) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentSpeed(speed);
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={ariaLabel}
      style={{
        maskImage: fadeOut
          ? `linear-gradient(${direction === 'left' || direction === 'right' ? 'to right' : 'to bottom'
          }, transparent, ${fadeOutColor} 10%, ${fadeOutColor} 90%, transparent)`
          : undefined,
        WebkitMaskImage: fadeOut
          ? `linear-gradient(${direction === 'left' || direction === 'right' ? 'to right' : 'to bottom'
          }, transparent, ${fadeOutColor} 10%, ${fadeOutColor} 90%, transparent)`
          : undefined,
      }}
    >
      <div
        ref={wrapperRef}
        className={`flex ${direction === 'left' || direction === 'right' ? 'flex-row' : 'flex-col'} items-center`}
        style={{
          gap: `${gap}px`,
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className={`flex-shrink-0 flex items-center justify-center ${scaleOnHover ? 'transition-transform duration-300 hover:scale-110' : ''
              }`}
            style={{
              height: `${logoHeight}px`,
              width: logo.node || logo.src ? `${logoHeight}px` : 'auto',
              minWidth: logo.name ? 'auto' : `${logoHeight}px`,
            }}
          >
            {logo.href ? (
              <a
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-full"
                aria-label={logo.title || logo.alt || logo.name}
              >
                {logo.node}
                {logo.src && (
                  <img
                    src={logo.src}
                    alt={logo.alt || logo.title || ''}
                    className="max-w-full max-h-full object-contain"
                  />
                )}
                {logo.name && (
                  <div className="p-3 md:p-4 bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-indigo-900/40 backdrop-blur-xl border border-purple-500/30 shadow-lg rounded-lg flex items-center justify-center whitespace-nowrap hover:shadow-purple-500/50 transition-all duration-300 cursor-pointer">
                    <span className="text-white text-sm md:text-base font-medium text-center">
                      {logo.name}
                    </span>
                  </div>
                )}
              </a>
            ) : (
              <div className="flex items-center justify-center w-full h-full">
                {logo.node}
                {logo.src && (
                  <img
                    src={logo.src}
                    alt={logo.alt || logo.title || ''}
                    className="max-w-full max-h-full object-contain"
                  />
                )}
                {logo.name && (
                  <div className="p-3 md:p-4 bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-indigo-900/40 backdrop-blur-xl border border-purple-500/30 shadow-lg rounded-lg flex items-center justify-center whitespace-nowrap hover:shadow-purple-500/50 transition-all duration-300">
                    <span className="text-white text-sm md:text-base font-medium text-center">
                      {logo.name}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
