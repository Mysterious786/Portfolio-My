'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import ExperienceCard from '@/components/ExperienceCard';
import ProjectCard from '@/components/ProjectCard';
import experiences from '@/public/data/experiences.json';
import projects from '@/public/data/projects.json';
import social from '@/public/data/social.json';

gsap.registerPlugin(ScrollTrigger);

/**
 * Home Page
 * 
 * Main portfolio page showcasing:
 * - Hero section with introduction
 * - Internship experiences
 * - Professional experience
 * - Best projects showcase
 * - Coding competitions
 * 
 * Features:
 * - Scroll-triggered animations
 * - Responsive grid layouts
 * - Dynamic data from JSON files
 * 
 * @page
 */

export default function Home() {
  const socialMap = Object.fromEntries(
    social.socialLinks.map((item) => [item.platform.toLowerCase(), item.url])
  ) as Record<string, string>;
  const internshipSectionRef = useRef<HTMLDivElement>(null);
  const professionalSectionRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const competitionsSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate section entries
    const sections = [
      internshipSectionRef.current,
      professionalSectionRef.current,
      projectsSectionRef.current,
      competitionsSectionRef.current,
    ];

    sections.forEach((section) => {
      if (!section) return;

      const cards = section.querySelectorAll('[data-card]');
      gsap.fromTo(
        cards,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />

      {/* Internship Experience Section */}
      <section
        ref={internshipSectionRef}
        className="relative pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 lg:pb-28 px-4 sm:px-6 lg:px-8 bg-background"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -right-32 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <SectionTitle
            title="Internship Experience"
            subtitle="Hands-on experience where I learned and contributed to real-world projects"
          />

          <div className="mt-12 grid grid-cols-1 gap-8">
            {experiences.internships.map((exp) => (
              <div key={exp.id} data-card>
                <ExperienceCard
                  company={exp.company}
                  position={exp.position}
                  duration={exp.duration}
                  location={exp.location}
                  description={exp.description}
                  skills={exp.skills}
                  highlights={exp.highlights}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section
        ref={professionalSectionRef}
        className="relative pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 lg:pb-28 px-4 sm:px-6 lg:px-8 bg-card/30 border-t border-border"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <SectionTitle
            title="Professional Experience"
            subtitle="Current and past roles where I've made significant impact"
          />

          <div className="grid grid-cols-1 gap-8">
            {experiences.professional.map((exp) => (
              <div key={exp.id} data-card>
                <ExperienceCard
                  company={exp.company}
                  position={exp.position}
                  duration={exp.duration}
                  location={exp.location}
                  description={exp.description}
                  skills={exp.skills}
                  highlights={exp.highlights}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Projects Section */}
      <section
        ref={projectsSectionRef}
        className="relative pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 lg:pb-28 px-4 sm:px-6 lg:px-8 bg-background"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <SectionTitle
            title="Best Works"
            subtitle="Featured projects that showcase my skills and creativity"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.bestWorks.map((project) => (
              <div key={project.id} data-card>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                  features={project.features}
                  links={project.links}
                  challenges={project.challenges}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitions Section */}
      <section
        ref={competitionsSectionRef}
        className="relative pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 lg:pb-28 px-4 sm:px-6 lg:px-8 bg-card/30 border-t border-border"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <SectionTitle
            title="Competitions & Achievements"
            subtitle="Awards and recognitions from coding competitions"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.competitions.map((comp) => (
              <div
                key={comp.id}
                data-card
                className="p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 group"
              >
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {comp.name}
                    </h3>
                    <p className="text-accent text-lg font-semibold mb-2">
                      {comp.prize}
                    </p>
                    <p className="text-gray-400 text-sm mb-4">{comp.date}</p>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {comp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {comp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/50 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            I&apos;m always interested in hearing about new projects and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </button>
            <button className="px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300">
              View GitHub
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-background/50">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Saqlain Zarjis Ansari. All rights reserved.</p>
          <div className="flex gap-6">
            <a href={socialMap.github} className="hover:text-primary transition-colors">
              GitHub
            </a>
            <a href={socialMap.linkedin} className="hover:text-primary transition-colors">
              LinkedIn
            </a>
            <a href={socialMap.twitter} className="hover:text-primary transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
