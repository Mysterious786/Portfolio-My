'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * JourneySection Component
 * 
 * Displays education, goals, interests, and fun facts
 * Features:
 * - Multiple content categories
 * - Scroll animations
 * - Interactive cards
 */

interface JourneySectionProps {
  education: Array<{
    degree: string;
    field: string;
    institution: string;
    year: string;
    details: string;
  }>;
  goals: string[];
  interests: string[];
  funFacts: string[];
}

export default function JourneySection({
  education,
  goals,
  interests,
  funFacts,
}: JourneySectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    itemsRef.current.forEach((item, index) => {
      if (!item) return;

      gsap.fromTo(
        item,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative py-20 px-4 sm:px-6 lg:px-8 bg-card/30 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Education */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {education.map((edu, idx) => (
              <div
                key={edu.degree}
                ref={(el) => {
                  if (el) itemsRef.current[idx] = el;
                }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
                <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{edu.degree}</h3>
                      <p className="text-lg text-foreground/70">{edu.field}</p>
                    </div>
                    <span className="text-sm font-semibold bg-primary/20 text-primary px-4 py-2 rounded-full">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-foreground/60 mb-2">{edu.institution}</p>
                  <p className="text-foreground/70">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Goals */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              My Goals
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {goals.map((goal, idx) => (
              <div
                key={goal}
                ref={(el) => {
                  if (el) itemsRef.current[idx + education.length] = el;
                }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
                <div className="relative bg-card border border-border rounded-xl p-6 hover:border-secondary/50 transition-colors duration-300">
                  <div className="flex gap-4">
                    <div className="text-2xl">🎯</div>
                    <p className="text-foreground/80 leading-relaxed">{goal}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Interests
            </span>
          </h2>
          <div className="flex flex-wrap gap-4">
            {interests.map((interest) => (
              <div
                key={interest}
                className="px-6 py-3 bg-card border border-border rounded-full hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-default"
              >
                <span className="text-foreground/80 font-medium">{interest}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Fun Facts
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {funFacts.map((fact, idx) => (
              <div
                key={fact}
                ref={(el) => {
                  if (el) itemsRef.current[idx + education.length + goals.length] = el;
                }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
                <div className="relative bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-colors duration-300">
                  <div className="flex gap-4">
                    <div className="text-2xl">✨</div>
                    <p className="text-foreground/80 leading-relaxed">{fact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
