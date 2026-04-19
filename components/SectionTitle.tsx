'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * SectionTitle Component
 * 
 * Reusable animated section title with scroll trigger.
 * Features:
 * - Scroll-triggered animations
 * - Gradient text effects
 * - Underline animations
 * 
 * @component
 * @example
 * <SectionTitle
 *   title="My Experience"
 *   subtitle="Professional Journey"
 * />
 */

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const titleEl = titleRef.current;
    const subtitleEl = subtitleRef.current;
    const underlineEl = underlineRef.current;

    if (!titleEl) return;

    // Title animation on scroll
    gsap.fromTo(
      titleEl,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleEl,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Subtitle animation
    if (subtitleEl) {
      gsap.fromTo(
        subtitleEl,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: subtitleEl,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Underline animation
    if (underlineEl) {
      gsap.fromTo(
        underlineEl,
        { width: 0, opacity: 0 },
        {
          width: '100%',
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleEl,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <div className="mb-12 sm:mb-16">
      <h2
        ref={titleRef}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight"
      >
        <span className="block text-white mb-2">{title}</span>
      </h2>
      {subtitle && (
        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed"
        >
          {subtitle}
        </p>
      )}
      <div
        ref={underlineRef}
        className="h-1 bg-gradient-to-r from-primary via-secondary to-accent mt-6 rounded-full w-0"
      />
    </div>
  );
}
