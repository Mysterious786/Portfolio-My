'use client';

import Navbar from '@/components/Navbar';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import projects from '@/public/data/projects.json';
import social from '@/public/data/social.json';

/**
 * Projects Page
 * 
 * Dedicated page showcasing all projects and competitions.
 * Features:
 * - Grid layout for best works
 * - Competition achievements
 * - Detailed project information
 * - Responsive design
 */

export default function ProjectsPage() {
  const socialMap = Object.fromEntries(
    social.socialLinks.map((item) => [item.platform.toLowerCase(), item.url])
  ) as Record<string, string>;
  return (
    <main className="bg-background text-foreground min-h-screen pt-16">
      <Navbar />

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/10 to-transparent border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
            My Projects
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl">
            Explore my best works and the projects I&apos;m most proud of.
          </p>
        </div>
      </section>

      {/* Best Works Section */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Featured Projects"
            subtitle="Showcasing my best work and technical expertise"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.bestWorks.map((project) => (
              <div key={project.id}>
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
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-card/30 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Competitions & Achievements"
            subtitle="Awards and recognitions from competitive programming"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.competitions.map((comp) => (
              <div
                key={comp.id}
                className="p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 group hover:shadow-lg hover:shadow-primary/20"
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

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-background/50">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
          <div className="flex gap-6">
            <a href={socialMap.github} className="hover:text-primary transition-colors">
              GitHub
            </a>
            <a href={socialMap.linkedin} className="hover:text-primary transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
