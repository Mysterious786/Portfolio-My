'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

/**
 * ProjectCard Component
 * 
 * Reusable card for displaying project showcases.
 * Features:
 * - Image hover zoom effects
 * - Staggered animation entry
 * - Technology tags
 * - Feature list
 * - External links
 * 
 * @component
 * @example
 * <ProjectCard
 *   title="My Project"
 *   description="..."
 *   image="..."
 *   technologies={["React", "Next.js"]}
 * />
 */

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features?: string[];
  links?: {
    live?: string;
    github?: string;
  };
  challenges?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  features = [],
  links = {},
  challenges,
}: ProjectCardProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (imageRef.current && overlayRef.current) {
      gsap.to(imageRef.current, {
        scale: 1.12,
        duration: 0.6,
        ease: 'power3.out',
      });

      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  };

  const handleMouseLeave = () => {
    if (imageRef.current && overlayRef.current) {
      gsap.to(imageRef.current, {
        scale: 1,
        duration: 0.6,
        ease: 'power3.out',
      });

      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group rounded-2xl overflow-hidden bg-card border border-border transition-all duration-300 hover:border-primary"
    >
      {/* Image Container */}
      <div className="relative h-64 sm:h-80 overflow-hidden bg-gray-900">
        <div ref={imageRef} className="w-full h-full transition-transform duration-500">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority={false}
          />
        </div>

        {/* Overlay on hover */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 flex items-end p-6"
        >
          <div className="flex gap-3">
            {links.live && (
              <a
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-secondary transition-colors duration-300"
              >
                Live Demo
              </a>
            )}
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-300"
              >
                Code
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>

        {/* Features */}
        {features.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-secondary mb-3">Key Features</h4>
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-accent mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Challenges */}
        {challenges && (
          <div className="mb-6 p-4 rounded-lg bg-gray-900/50 border border-border">
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-primary">Challenge: </span>
              {challenges}
            </p>
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-secondary/20 to-accent/20 text-secondary border border-secondary/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
