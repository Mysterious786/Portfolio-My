'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { getOptimizedImageUrl, preloadImages } from '@/lib/imageOptimization';

/**
 * ImageScroller Component
 * 
 * Interactive image carousel/scroller with smooth GSAP animations.
 * Features:
 * - Auto-scroll functionality
 * - Manual navigation buttons
 * - Smooth transition animations
 * - Image captions
 * - Responsive design
 * 
 * @component
 * @example
 * <ImageScroller images={imageArray} />
 */

interface Image {
  id: number;
  url: string;
  caption: string;
}

interface ImageScrollerProps {
  images: Image[];
  autoScroll?: boolean;
  autoScrollInterval?: number;
}

export default function ImageScroller({
  images,
  autoScroll = true,
  autoScrollInterval = 4000,
}: ImageScrollerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoScrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isAnimatingRef = useRef(false);

  // GSAP `x` is in pixels; we need one viewport width per slide. Track is N×100% of
  // the viewport wide; each slide is (100/N)% of the track → use xPercent of the track.
  const goToSlide = useCallback((index: number) => {
    if (images.length === 0) return;
    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    const newIndex = (index + images.length) % images.length;
    setCurrentIndex(newIndex);

    const track = scrollerRef.current;
    if (!track) {
      isAnimatingRef.current = false;
      return;
    }

    gsap.killTweensOf(track);
    gsap.to(track, {
      xPercent: -(newIndex * 100) / images.length,
      duration: 0.9,
      ease: 'power2.inOut',
      onComplete: () => {
        isAnimatingRef.current = false;
      },
    });
  }, [images.length]);

  const nextSlide = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  // Preload images on mount
  useEffect(() => {
    if (images.length > 0) {
      const optimizedUrls = images.map((img) =>
        getOptimizedImageUrl(img.url, 600, 400)
      );
      preloadImages(optimizedUrls);
    }
  }, [images]);

  // Auto-scroll effect
  useEffect(() => {
    if (!autoScroll || images.length === 0) return;

    const startAutoScroll = () => {
      autoScrollTimeoutRef.current = setTimeout(() => {
        goToSlide(currentIndex + 1);
      }, autoScrollInterval);
    };

    startAutoScroll();

    return () => {
      if (autoScrollTimeoutRef.current) {
        clearTimeout(autoScrollTimeoutRef.current);
      }
    };
  }, [currentIndex, autoScroll, autoScrollInterval, images.length, goToSlide]);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => {
    if (autoScrollTimeoutRef.current) {
      clearTimeout(autoScrollTimeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (autoScroll) {
      autoScrollTimeoutRef.current = setTimeout(() => {
        nextSlide();
      }, autoScrollInterval);
    }
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Images Container */}
      <div
        ref={viewportRef}
        className="relative w-full overflow-hidden rounded-2xl bg-gray-900"
      >
        <div
          ref={scrollerRef}
          className="flex will-change-transform"
          style={{ width: `${images.length * 100}%` }}
        >
          {images.map((image, idx) => (
            <div
              key={image.id}
              className="relative aspect-video shrink-0"
              style={{ width: `${100 / images.length}%` }}
            >
              <Image
                src={getOptimizedImageUrl(image.url, 600, 400)}
                alt={image.caption}
                fill
                className="object-cover"
                priority={idx === currentIndex}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
              />
              {/* Gradient overlay for caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-lg sm:text-xl font-semibold">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 flex items-center justify-center text-white group"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 flex items-center justify-center text-white group"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? 'w-8 bg-gradient-to-r from-primary to-secondary'
                : 'w-2 bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="text-center mt-4 text-gray-500 text-sm">
        <span className="text-white font-semibold">{currentIndex + 1}</span> /{' '}
        {images.length}
      </div>
    </div>
  );
}
