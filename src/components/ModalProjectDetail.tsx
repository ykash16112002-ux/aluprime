import React from 'react';
import { X, ArrowUpRight, Check, MapPin, Maximize2, ShieldCheck, Sparkles } from 'lucide-react';
import { ProjectItem } from '../types';
import { ProjectIllustration } from './ArchitecturalVisuals';
import { SmartImage } from './SmartImage';

interface ModalProjectDetailProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestSimilar: (projectName: string) => void;
}

export const ModalProjectDetail: React.FC<ModalProjectDetailProps> = ({
  project,
  onClose,
  onRequestSimilar,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#FAF9F7] rounded-[2.5rem] shadow-2xl border border-neutral-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header / Media banner with real photo */}
        <div className="relative aspect-[16/9] w-full bg-neutral-900 shrink-0">
          <SmartImage
            src={project.imageUrl || ''}
            alt={project.title}
            className="w-full h-full"
            fallbackNode={<ProjectIllustration theme={project.svgTheme} className="w-full h-full" />}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-white hover:text-neutral-900 flex items-center justify-center transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Floating title over media */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-300 block mb-1">
              {project.categoryLabel} · {project.year}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs text-neutral-300 flex items-center gap-1.5 mt-1 font-light">
              <MapPin className="w-3.5 h-3.5 text-neutral-400" />
              <span>{project.location}</span>
            </p>
          </div>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Key technical cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-2xl bg-neutral-100 border border-neutral-200/60">
              <span className="text-[10px] text-neutral-500 uppercase tracking-wider block">
                Площадь фасада
              </span>
              <span className="text-sm font-bold font-mono text-neutral-900 mt-0.5 block">
                {project.area}
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-neutral-100 border border-neutral-200/60">
              <span className="text-[10px] text-neutral-500 uppercase tracking-wider block">
                Профильная система
              </span>
              <span className="text-sm font-bold font-mono text-neutral-900 mt-0.5 block">
                {project.profileBrand}
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-neutral-100 border border-neutral-200/60 col-span-2 sm:col-span-1">
              <span className="text-[10px] text-neutral-500 uppercase tracking-wider block">
                Формула стекла
              </span>
              <span className="text-xs font-bold font-mono text-neutral-900 mt-0.5 block truncate" title={project.glassFormula}>
                {project.glassFormula}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-2">
              Архитектурная задача и решение
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-2.5">
              Инженерные особенности объекта
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700">
                  <span className="w-4 h-4 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Action */}
          <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-neutral-500">
              Хотите реализовать подобное остекление на вашем объекте?
            </span>
            <button
              onClick={() => {
                onRequestSimilar(`Проект на основе: ${project.title}`);
                onClose();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-950 text-white rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors shrink-0"
            >
              <span>Рассчитать аналогичный проект</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
