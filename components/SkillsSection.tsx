'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * SkillsSection Component
 * 
 * Displays skills organized by category
 * Features:
 * - Categorized skill display
 * - Scroll animations
 * - Responsive grid layout
 */

interface SkillsSectionProps {
  skills: {
    frontend: string[];
    backend: string[];
    tools: string[];
  };
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Animate each skill category on scroll
    skillsRef.current.forEach((skill, index) => {
      if (!skill) return;

      gsap.fromTo(
        skill,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: skill,
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

  const categories = [
    { title: 'Frontend', skills: skills.frontend, color: 'from-primary' },
    { title: 'Backend', skills: skills.backend, color: 'from-secondary' },
    { title: 'Tools & Platforms', skills: skills.tools, color: 'from-accent' },
  ];

  return (
    <section id="skills" ref={containerRef} className="relative py-20 px-4 sm:px-6 lg:px-8 bg-card/30 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl">
            Here&apos;s a comprehensive overview of the technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <div
              key={category.title}
              ref={(el) => {
                if (el) skillsRef.current[idx] = el;
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
              <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors duration-300">
                <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} to-accent bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 p-3 bg-background/50 rounded-lg hover:bg-primary/10 transition-colors duration-300 cursor-default"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
                      <span className="text-foreground/80 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
