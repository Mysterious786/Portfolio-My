'use client';

import Navbar from '@/components/Navbar';
import SectionTitle from '@/components/SectionTitle';
import ExperienceCard from '@/components/ExperienceCard';
import experiences from '@/public/data/experiences.json';
import social from '@/public/data/social.json';

/**
 * Experience Page
 * 
 * Dedicated page for displaying all internship and professional experience.
 * Features:
 * - Organized by experience type
 * - Detailed descriptions
 * - Skills and achievements highlighted
 * - Responsive layout
 */

export default function ExperiencePage() {
  const socialMap = Object.fromEntries(
    social.socialLinks.map((item) => [item.platform.toLowerCase(), item.url])
  ) as Record<string, string>;
  return (
    <main className="bg-background text-foreground min-h-screen pt-16">
      <Navbar />

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
            My Experience
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl">
            A comprehensive overview of my professional journey and internship experiences.
          </p>
        </div>
      </section>

      {/* Internships Section */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Internship Experiences"
            subtitle="Learning and contributing through internship programs"
          />

          <div className="grid grid-cols-1 gap-8">
            {experiences.internships.map((exp) => (
              <div key={exp.id}>
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

      {/* Professional Section */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-card/30 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Professional Experience"
            subtitle="Full-time roles and significant projects"
          />

          <div className="grid grid-cols-1 gap-8">
            {experiences.professional.map((exp) => (
              <div key={exp.id}>
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

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-background/50">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Saqlain Zarjis Ansari</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Full Stack Developer passionate about building scalable web applications and solving complex problems.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-sm text-gray-400 hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-sm text-gray-400 hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/projects" className="text-sm text-gray-400 hover:text-primary transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/experience" className="text-sm text-gray-400 hover:text-primary transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="mailto:saqlainzarjisansari@gmail.com" className="text-sm text-gray-400 hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Connect With Me</h3>
              <div className="flex flex-col space-y-2">
                <a 
                  href={socialMap.github} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  GitHub
                </a>
                <a 
                  href={socialMap.linkedin} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href={socialMap.instagram} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  Instagram
                </a>
                <a 
                  href={socialMap.codechef} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  CodeChef
                </a>
                <a 
                  href={socialMap.codeforces} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  Codeforces
                </a>
                <a 
                  href={socialMap.leetcode} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  LeetCode
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Saqlain Zarjis Ansari. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a 
                href="mailto:saqlainzarjisansari@gmail.com" 
                className="text-sm text-gray-500 hover:text-primary transition-colors"
              >
                Email
              </a>
              <a 
                href={socialMap.github} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a 
                href={socialMap.linkedin} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
