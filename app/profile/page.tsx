'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import SectionTitle from '@/components/SectionTitle';
import ImageScroller from '@/components/ImageScroller';
import SocialLinks from '@/components/SocialLinks';
import social from '@/public/data/social.json';

/**
 * Profile Page
 * 
 * Personal profile page with:
 * - Image gallery/scroller
 * - Social media links
 * - Coding platform ratings
 * - GitHub and platform stats
 * - Responsive design
 */

export default function ProfilePage() {
  const [socialLinks, setSocialLinks] = useState(social.socialLinks);
  const socialMap = Object.fromEntries(
    social.socialLinks.map((item) => [item.platform.toLowerCase(), item.url])
  ) as Record<string, string>;

  useEffect(() => {
    let isMounted = true;

    const fetchLiveStats = async () => {
      try {
        const response = await fetch('/api/live-stats', { cache: 'no-store' });
        if (!response.ok) return;

        const live = await response.json();
        if (!isMounted) return;

        setSocialLinks((prev) =>
          prev.map((item) => {
            if (item.platform === 'github' && live.github) {
              return {
                ...item,
                stats: `${live.github.publicRepos} Public Repos • ${live.github.followers} Followers`,
              };
            }
            if (item.platform === 'linkedin' && live.linkedin?.note) {
              return {
                ...item,
                stats: 'LinkedIn Profile',
              };
            }
            return item;
          })
        );
      } catch {
        // Keep static JSON stats if API call fails.
      }
    };

    fetchLiveStats();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main className="bg-background text-foreground min-h-screen pt-16">
      <Navbar />

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/10 to-transparent border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
            About Me
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl">
            Full-stack developer passionate about building beautiful and functional web experiences. Always learning, always growing.
          </p>
        </div>
      </section>

      {/* Profile Image Gallery Section */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Gallery"
            subtitle="Moments from my journey as a developer"
          />
          <ImageScroller images={social.profileImages} autoScroll={true} />
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-card/30 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Connect With Me"
            subtitle="Find me on these platforms"
          />
          <SocialLinks links={socialLinks} />
        </div>
      </section>

      {/* Coding Ratings Section */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Competitive Programming Ratings"
            subtitle="My achievements on major coding platforms"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {social.codingRatings.map((rating, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 group"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {rating.platform}
                </h3>

                <div className="space-y-3">
                  {rating.contests && (
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Rating</p>
                      <p className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {'rating' in rating ? rating.maxRating : 'N/A'}
                      </p>
                    </div>
                  )}

                  {rating.solved && (
                    <>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Problems Solved</p>
                        <p className="text-3xl font-bold text-primary">
                          {rating.solved}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">
                          Acceptance Rate
                        </p>
                        <p className="text-2xl font-bold text-secondary">
                          {rating.acceptanceRate}
                        </p>
                      </div>
                    </>
                  )}

                  {rating.contests && (
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Contests</p>
                      <p className="text-2xl font-bold text-accent">
                        {rating.contests}
                      </p>
                    </div>
                  )}
                </div>

                {/* Animated border on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/10 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Text Section */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-card/30 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white">
            My Story
          </h2>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              I&apos;m a passionate full-stack developer with a keen interest in
              creating engaging user experiences and scalable backend systems. My
              journey in tech started with curiosity and has evolved into a
              professional career.
            </p>

            <p className="text-lg">
              Through my internships and professional roles, I&apos;ve gained
              experience with modern web technologies and best practices in
              software development. I&apos;m particularly interested in
              animations, interactive interfaces, and performance optimization.
            </p>

            <p className="text-lg">
              When I&apos;m not coding, you can find me competing on coding
              platforms, contributing to open-source projects, or learning about
              new technologies. I believe in continuous learning and pushing the
              boundaries of what&apos;s possible on the web.
            </p>

            <p className="text-lg font-semibold text-primary mt-8">
              Let&apos;s build something amazing together!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/50 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Let&apos;s Collaborate
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s create
            something exceptional together.
          </p>
          <a 
            href="mailto:saqlainzarjisansari@gmail.com"
            className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
          >
            Send Me an Email
          </a>
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
