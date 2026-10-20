import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { REALIZED_PROJECTS } from '../data/content';
import { ProjectIllustration } from './ArchitecturalVisuals';
import { SmartImage } from './SmartImage';
import { ProjectItem } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenConsultation: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'residence' | 'penthouse' | 'commercial'>('all');

  const filteredProjects = activeFilter === 'all'
    ? REALIZED_PROJECTS
    : REALIZED_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section className="py-20 border-t border-neutral-200/80 relative">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8">
        {/* Header matching reference */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
              <span className="text-[11px] font-semibold tracking-[0.2em] text-neutral-600 uppercase">
                НАШИ ПРОЕКТЫ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-[-0.03em] leading-tight">
              Реализованные проекты
            </h2>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-200/60 rounded-xl">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeFilter === 'all'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Все объекты
            </button>
            <button
              onClick={() => setActiveFilter('residence')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeFilter === 'residence'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Резиденции
            </button>
            <button
              onClick={() => setActiveFilter('penthouse')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeFilter === 'penthouse'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Пентхаусы
            </button>
            <button
              onClick={() => setActiveFilter('commercial')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeFilter === 'commercial'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Витрины бутиков
            </button>
          </div>
        </div>

        {/* 3 Project Cards matching reference format with real photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="cursor-pointer group flex flex-col"
            >
              {/* Card Container with rounded-[2rem] matching reference */}
              <div className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden bg-neutral-900 border border-neutral-800 shadow-md group-hover:shadow-2xl transition-all duration-300">
                <SmartImage
                  src={project.imageUrl || ''}
                  alt={project.title}
                  className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                  fallbackNode={
                    <ProjectIllustration
                      theme={project.svgTheme}
                      className="w-full h-full"
                    />
                  }
                />

                {/* Scrim overlay for crisp typography */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

                {/* Bottom Card Content inside the image container, matching reference */}
                <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between text-white z-10">
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-300 mt-1 font-light">
                      {project.location}
                    </p>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 group-hover:bg-white group-hover:text-neutral-950 flex items-center justify-center transition-all duration-200 shrink-0 text-white">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
