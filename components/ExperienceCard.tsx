'use client';

import { useHoverAnimation } from '@/hooks/useScrollAnimation';

/**
 * ExperienceCard Component
 * 
 * Reusable card for displaying experience/internship details.
 * Features:
 * - Hover animations with GSAP
 * - Gradient border effects
 * - Skill tags display
 * - Responsive layout
 * 
 * @component
 * @example
 * <ExperienceCard
 *   company="Tech Inc"
 *   position="Frontend Developer"
 *   duration="Jun 2023 - Aug 2023"
 *   description="..."
 *   skills={["React", "TypeScript"]}
 * />
 */

interface ExperienceCardProps {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  skills: string[];
  highlights?: string[];
}

export default function ExperienceCard({
  company,
  position,
  duration,
  location,
  description,
  skills,
  highlights = [],
}: ExperienceCardProps) {
  const cardRef = useHoverAnimation(
    { y: -8, duration: 0.4 },
    { y: 0, duration: 0.4 }
  );

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden rounded-2xl bg-card border border-border p-6 sm:p-8 transition-shadow duration-300"
    >
      {/* Animated gradient border on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20" />
      </div>

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">{position}</h3>
            <p className="text-primary font-semibold text-lg">{company}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400">{duration}</p>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
        </div>

        <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>

        {/* Highlights */}
        {highlights.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-primary mb-3">Key Achievements</h4>
            <ul className="space-y-2">
              {highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-secondary mt-1">▸</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border border-primary/30 hover:border-secondary transition-colors duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
