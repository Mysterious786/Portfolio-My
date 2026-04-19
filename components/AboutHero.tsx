'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * AboutHero Component
 * 
 * Hero section for About page with profile image and introduction
 * Features:
 * - Animated profile image
 * - Smooth text reveal
 * - Responsive design
 * - GSAP scroll triggers
 */

interface AboutHeroProps {
  name: string;
  title: string;
  bio: string;
  profileImage: string;
}

export default function AboutHero({
  name,
  title,
  bio,
  profileImage,
}: AboutHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const imageEl = imageRef.current;
    const nameEl = nameRef.current;
    const titleEl = titleRef.current;
    const bioEl = bioRef.current;
    if (!imageEl || !nameEl || !titleEl || !bioEl) return;

    const timeline = gsap.timeline();

    // Image animation
    timeline.fromTo(
      imageEl,
      { scale: 0.8, opacity: 0, y: 40 },
      { scale: 1, opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    // Content animations
    timeline.fromTo(
      nameEl,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    );

    timeline.fromTo(
      titleEl,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    );

    timeline.fromTo(
      bioEl,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div ref={imageRef} className="relative h-96 lg:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-3xl" />
            <div className="relative h-full rounded-3xl overflow-hidden border border-border">
              <Image
                src={profileImage}
                alt={name}
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <h1
              ref={nameRef}
              className="text-5xl sm:text-6xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {name}
              </span>
            </h1>

            <p
              ref={titleRef}
              className="text-2xl sm:text-3xl text-foreground/80 font-semibold"
            >
              {title}
            </p>

            <p
              ref={bioRef}
              className="text-lg leading-relaxed text-foreground/70 max-w-lg"
            >
              {bio}
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="#skills"
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors duration-300 font-semibold"
              >
                Explore Skills
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors duration-300 font-semibold"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
