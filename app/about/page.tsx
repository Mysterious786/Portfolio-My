'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import AboutHero from '@/components/AboutHero';
import SkillsSection from '@/components/SkillsSection';
import PersonalStats from '@/components/PersonalStats';
import JourneySection from '@/components/JourneySection';

interface AboutData {
  name: string;
  title: string;
  bio: string;
  summary: string;
  profileImage: string;
  skills: {
    frontend: string[];
    backend: string[];
    tools: string[];
  };
  personalStats: {
    yearsOfExperience: number;
    projectsCompleted: number;
    codingHours: number;
    learningGoal: string;
  };
  interests: string[];
  funFacts: string[];
  education: Array<{
    degree: string;
    field: string;
    institution: string;
    year: string;
    details: string;
  }>;
  goals: string[];
}

export default function AboutPage() {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch('/data/about.json');
        if (!response.ok) throw new Error('Failed to fetch about data');
        const data = await response.json();
        setAboutData(data);
      } catch (error) {
        console.error('Error fetching about data:', error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-background pt-16">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4" />
            <p className="text-foreground/70">Loading...</p>
          </div>
        </div>
      </>
    );
  }

  if (!aboutData) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-background pt-16">
          <div className="text-center">
            <p className="text-foreground/70">Error loading content</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <main className="bg-background">
      <Navbar />
      <AboutHero
        name={aboutData.name}
        title={aboutData.title}
        bio={aboutData.bio}
        profileImage={aboutData.profileImage}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-foreground/80 max-w-3xl border-l-4 border-primary pl-6">
            {aboutData.summary}
          </p>
        </div>
      </section>

      <PersonalStats stats={aboutData.personalStats} />

      <SkillsSection skills={aboutData.skills} />

      <JourneySection
        education={aboutData.education}
        goals={aboutData.goals}
        interests={aboutData.interests}
        funFacts={aboutData.funFacts}
      />

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            I&apos;m always interested in hearing about new projects and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:your.email@example.com"
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors duration-300 font-semibold"
            >
              Send Me an Email
            </a>
            <a
              href="/profile"
              className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors duration-300 font-semibold"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
