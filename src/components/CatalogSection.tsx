import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../data/content';
import { CategoryIllustration } from './ArchitecturalVisuals';
import { SmartImage } from './SmartImage';
import { ServiceCategory } from '../types';

interface CatalogProps {
  onSelectCategory: (category: ServiceCategory) => void;
  onOpenConsultation: (serviceTitle?: string) => void;
}

export const CatalogSection: React.FC<CatalogProps> = ({
  onSelectCategory,
  onOpenConsultation,
}) => {
  return (
    <section className="py-20 border-t border-neutral-200/80 relative">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8">
        {/* Top Header Row matching reference */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
              <span className="text-[11px] font-semibold tracking-[0.2em] text-neutral-600 uppercase">
                КАТЕГОРИИ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-[-0.03em] leading-tight">
              Наши решения
            </h2>
            <p className="text-sm text-neutral-500 max-w-lg mt-2">
              Каждая конструкция — это баланс чистой эстетики, инженерной надёжности и европейских технологий.
            </p>
          </div>

          <button
            onClick={() => onSelectCategory(CATEGORIES[0])}
            className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-800 hover:text-neutral-950 transition-colors group self-start md:self-auto"
          >
            <span>Смотреть каталог</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {/* 4 Vertical Rounded Cards matching reference layout with real photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat)}
              className="cursor-pointer group flex flex-col"
            >
              {/* Card Image Container with rounded-[2rem] matching reference */}
              <div className="relative aspect-[3/4] w-full rounded-[2rem] overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-sm group-hover:shadow-xl transition-all duration-300">
                <SmartImage
                  src={cat.imageUrl || ''}
                  alt={cat.title}
                  className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                  fallbackNode={
                    <CategoryIllustration
                      type={cat.svgType}
                      className="w-full h-full"
                    />
                  }
                />

                {/* Subtle top badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-800 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-xs">
                    {cat.badge}
                  </span>
                </div>

                {/* Subtle bottom gradient for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Bottom Label & Circle Arrow Button matching reference */}
              <div className="mt-4 flex items-center justify-between px-2">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 group-hover:text-neutral-700 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    {cat.subtitle}
                  </p>
                </div>

                <div className="w-8 h-8 rounded-full border border-neutral-300 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white flex items-center justify-center transition-all duration-200 shrink-0 text-neutral-700">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
