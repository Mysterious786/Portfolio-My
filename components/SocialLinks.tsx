'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * SocialLinks Component
 * 
 * Displays social media and coding platform links with animated icons.
 * Features:
 * - Icon animations on hover
 * - Platform badges with stats
 * - Responsive grid layout
 * - External link handling
 * 
 * @component
 * @example
 * <SocialLinks links={socialLinksArray} />
 */

interface SocialLink {
  id: number;
  platform: string;
  url: string;
  icon: string;
  label: string;
  stats: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

const getIcon = (platform: string) => {
  const icons: Record<string, JSX.Element> = {
    github: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    linkedin: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    ),
    twitter: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
    code: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  };

  return icons[platform] || icons.code;
};

export default function SocialLinks({ links }: SocialLinksProps) {
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    linkRefs.current.forEach((link) => {
      if (!link) return;

      const icon = link.querySelector('svg');

      link.addEventListener('mouseenter', () => {
        gsap.to(link, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power3.out',
        });

        gsap.to(icon, {
          rotate: 10,
          duration: 0.4,
          ease: 'power3.out',
        });
      });

      link.addEventListener('mouseleave', () => {
        gsap.to(link, {
          scale: 1,
          duration: 0.3,
          ease: 'power3.out',
        });

        gsap.to(icon, {
          rotate: 0,
          duration: 0.4,
          ease: 'power3.out',
        });
      });
    });
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
      {links.map((link, idx) => (
        <a
          key={link.id}
          ref={(el) => {
            if (el) linkRefs.current[idx] = el;
          }}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-4 sm:p-6 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 flex flex-col items-center text-center gap-3"
        >
          {/* Icon */}
          <div className="text-primary group-hover:text-secondary transition-colors duration-300">
            {getIcon(link.platform)}
          </div>

          {/* Label */}
          <h3 className="font-semibold text-white text-sm sm:text-base">
            {link.label}
          </h3>

          {/* Stats */}
          <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
            {link.stats}
          </p>

          {/* Hover indicator */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/10 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </a>
      ))}
    </div>
  );
}
