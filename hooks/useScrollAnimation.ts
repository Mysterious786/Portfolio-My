'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * useScrollAnimation Hook
 * 
 * Reusable hook for scroll-triggered animations.
 * Handles animation lifecycle and cleanup automatically.
 * 
 * @param {Object} options - Animation configuration
 * @returns {React.RefObject} - Ref to attach to element
 * 
 * @example
 * const ref = useScrollAnimation({
 *   from: { y: 30, opacity: 0 },
 *   to: { y: 0, opacity: 1 },
 *   duration: 0.8,
 *   triggerStart: 'top 80%'
 * });
 * 
 * return <div ref={ref}>Content</div>
 */

interface ScrollAnimationOptions {
  from?: Record<string, any>;
  to?: Record<string, any>;
  duration?: number;
  ease?: string;
  delay?: number;
  triggerStart?: string;
  triggerEnd?: string;
  toggleActions?: string;
  stagger?: number;
  markers?: boolean;
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const ref = useRef<HTMLElement>(null);

  const {
    from = { y: 30, opacity: 0 },
    to = { y: 0, opacity: 1 },
    duration = 0.8,
    ease = 'power3.out',
    delay = 0,
    triggerStart = 'top 80%',
    triggerEnd = undefined,
    toggleActions = 'play none none reverse',
    stagger = 0,
    markers = false,
  } = options;

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      from,
      {
        ...to,
        duration,
        ease,
        delay,
        scrollTrigger: {
          trigger: ref.current,
          start: triggerStart,
          end: triggerEnd,
          toggleActions,
          markers,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === ref.current) {
          trigger.kill();
        }
      });
    };
  }, [from, to, duration, ease, delay, triggerStart, triggerEnd, toggleActions, markers]);

  return ref;
}

/**
 * useHoverAnimation Hook
 * 
 * Reusable hook for hover animations.
 * 
 * @param {Object} onHoverConfig - Animation on hover
 * @param {Object} onLeaveConfig - Animation on leave
 * @returns {React.RefObject} - Ref to attach to element
 * 
 * @example
 * const ref = useHoverAnimation(
 *   { scale: 1.05, duration: 0.3 },
 *   { scale: 1, duration: 0.3 }
 * );
 */

interface HoverAnimationConfig {
  duration?: number;
  ease?: string;
  [key: string]: any;
}

export function useHoverAnimation(
  onHoverConfig: HoverAnimationConfig = {},
  onLeaveConfig: HoverAnimationConfig = {}
) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const hoverConfig = {
      duration: 0.4,
      ease: 'power3.out',
      ...onHoverConfig,
    };
    const leaveConfig = {
      duration: 0.4,
      ease: 'power3.out',
      ...onLeaveConfig,
    };

    const handleMouseEnter = () => {
      gsap.to(element, hoverConfig);
    };

    const handleMouseLeave = () => {
      gsap.to(element, leaveConfig);
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [onHoverConfig, onLeaveConfig]);

  return ref;
}
