'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Hero Component
 * 
 * Eye-catching hero section with animated text and call-to-action buttons.
 * Features:
 * - Staggered text animations
 * - Animated gradient background
 * - Floating elements
 * - Responsive design
 * 
 * @component
 * @example
 * <Hero />
 */

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const floatingBoxesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const timeline = gsap.timeline();

    // Title animation
    timeline.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );

    // Subtitle animation
    timeline.fromTo(
      subtitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    );

    // Buttons animation
    timeline.fromTo(
      buttonsRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    );

    // Floating boxes animation
    floatingBoxesRef.current.forEach((box, index) => {
      if (!box) return;
      gsap.fromTo(
        box,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 0.1,
          duration: 1,
          ease: 'power3.out',
          delay: 0.2 + index * 0.1,
        }
      );

      // Floating animation
      gsap.to(box, {
        y: -20,
        duration: 3 + index,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-background">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full mix-blend-screen blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary rounded-full mix-blend-screen blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-accent rounded-full mix-blend-screen blur-3xl animate-pulse" />
      </div>

      {/* Floating decorative boxes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) floatingBoxesRef.current[i] = el;
            }}
            className={`absolute border border-primary/20 ${
              i % 2 === 0
                ? 'w-64 h-64 bg-primary/5'
                : 'w-48 h-48 bg-secondary/5'
            }`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`,
              transform: `rotate(${i * 15}deg)`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          ref={titleRef}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
        >
          <span className="block text-white">Welcome to My Portfolio</span>
          <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Full Stack Developer
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          I build stunning, interactive web experiences with cutting-edge
          technologies. From elegant designs to powerful backends, I deliver
          excellence.
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/projects"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 inline-block text-center"
          >
            View My Work
          </a>
          <a 
            href="mailto:saqlainzarjisansari@gmail.com"
            className="px-8 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300 inline-block text-center"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-gray-500 text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </div> */}
      </div>
    </div>
  );
}
