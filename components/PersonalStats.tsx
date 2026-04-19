'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * PersonalStats Component
 * 
 * Displays key statistics and achievements
 * Features:
 * - Animated number counters
 * - Responsive grid
 * - Scroll triggers
 */

interface PersonalStatsProps {
  stats: {
    yearsOfExperience: number;
    projectsCompleted: number;
    codingHours: number;
    learningGoal: string;
  };
}

export default function PersonalStats({ stats }: PersonalStatsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Animate stats on scroll
    statsRef.current.forEach((stat, index) => {
      if (!stat) return;

      gsap.fromTo(
        stat,
        { scale: 0.8, opacity: 0, y: 30 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'back.out',
          scrollTrigger: {
            trigger: stat,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Animate numbers
      const numberElement = stat.querySelector('.stat-number');
      if (numberElement && index < 3) {
        const endValue = [stats.yearsOfExperience, stats.projectsCompleted, stats.codingHours][index];
        gsap.fromTo(
          { value: 0 },
          { value: endValue, duration: 2, ease: 'power2.out' },
          {
            onUpdate: function() {
              numberElement.textContent = Math.ceil(this.targets()[0].value);
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [stats]);

  const statItems = [
    {
      label: 'Years of Experience',
      value: stats.yearsOfExperience,
      suffix: '+',
      icon: '📅',
    },
    {
      label: 'Projects Completed',
      value: stats.projectsCompleted,
      suffix: '+',
      icon: '🚀',
    },
    {
      label: 'Coding Hours',
      value: stats.codingHours,
      suffix: '+',
      icon: '⌨️',
    },
    {
      label: 'Current Learning',
      value: stats.learningGoal,
      suffix: '',
      icon: '🎯',
    },
  ];

  return (
    <section ref={containerRef} className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              By The Numbers
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statItems.map((item, idx) => (
            <div
              key={item.label}
              ref={(el) => {
                if (el) statsRef.current[idx] = el;
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
              <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <div className="text-4xl mb-4">{item.icon}</div>
                {idx < 3 ? (
                  <div className="text-5xl font-bold text-primary mb-2">
                    <span className="stat-number">0</span>
                    {item.suffix}
                  </div>
                ) : (
                  <div className="text-lg font-semibold text-primary mb-2 line-clamp-2">
                    {item.value}
                  </div>
                )}
                <p className="text-foreground/70">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
