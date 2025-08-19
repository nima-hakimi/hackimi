'use client';
import { ProjectCard } from '@/components/ProjectCard';
import projects from '@/data/projects.json';

type Project = (typeof projects)[number];

import AnimatedSection from '@/components/AnimatedSection';

export default function ProjectsPage() {
  return (
    <AnimatedSection>
      <section className="space-y-8 max-w-4xl mx-auto">
        <header className="space-y-2 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">Projects</h1>
          <p className="muted">A selection of things I’ve built and shipped.</p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, index) => (
            <ProjectCard key={p.title} index={index} {...p} />
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
