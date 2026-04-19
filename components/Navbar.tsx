'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import social from '@/public/data/social.json';

/**
 * Navbar Component
 * 
 * A reusable, animated navigation bar with smooth GSAP animations.
 * Features:
 * - Smooth slide-down animation on load
 * - Active link highlighting
 * - Mobile responsive with hamburger menu
 * - Social media icons
 * - Optimized hover effects
 * 
 * @component
 * @example
 * <Navbar />
 */

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Profile', href: '/profile' },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const socialMap = Object.fromEntries(
    social.socialLinks.map((item) => [item.platform.toLowerCase(), item.url])
  ) as Record<string, string>;

  useEffect(() => {
    // Animate navbar entrance
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  }, []);

  useEffect(() => {
    // Animate mobile menu
    if (mobileMenuRef.current) {
      if (mobileMenuOpen) {
        gsap.to(mobileMenuRef.current, {
          height: 'auto',
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      } else {
        gsap.to(mobileMenuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    }
  }, [mobileMenuOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Saqlain Zarjis Ansari
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-12 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-primary transition-colors duration-300 relative group"
              >
                <span className="inline-block">{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            
            {/* Social Icons */}
            <div className="flex gap-4 pl-4 border-l border-border">
              <a
                href={socialMap.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors duration-300"
                aria-label="GitHub"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
              <a
                href={socialMap.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col justify-center gap-1.5"
          >
            <span
              className={`h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          ref={mobileMenuRef}
          className="md:hidden overflow-hidden h-0 opacity-0"
        >
          <div className="flex flex-col gap-4 py-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-primary transition-colors px-2 py-2"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-4 pt-4 border-t border-border">
              <a
                href={socialMap.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
              <a
                href={socialMap.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
