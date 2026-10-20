import React from 'react';
import { X, ArrowUpRight, Check, Shield, Layers, Thermometer } from 'lucide-react';
import { ServiceCategory } from '../types';
import { CategoryIllustration } from './ArchitecturalVisuals';
import { SmartImage } from './SmartImage';

interface ModalCategoryDetailProps {
  category: ServiceCategory | null;
  onClose: () => void;
  onRequestCategoryQuote: (categoryTitle: string) => void;
}

export const ModalCategoryDetail: React.FC<ModalCategoryDetailProps> = ({
  category,
  onClose,
  onRequestCategoryQuote,
}) => {
  if (!category) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#FAF9F7] rounded-[2.5rem] shadow-2xl border border-neutral-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner with visual */}
        <div className="relative aspect-[16/9] w-full bg-neutral-900 shrink-0">
          <SmartImage
            src={category.imageUrl || ''}
            alt={category.title}
            className="w-full h-full"
            fallbackNode={<CategoryIllustration type={category.svgType} className="w-full h-full" />}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-white hover:text-neutral-900 flex items-center justify-center transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-300 block mb-1">
              {category.badge}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              {category.title}
            </h3>
            <p className="text-xs text-neutral-300 font-light mt-0.5">
              {category.subtitle}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Key Specs */}
          <div className="grid grid-cols-3 gap-3">
            {category.specs.map((spec, i) => (
              <div key={i} className="p-3.5 rounded-2xl bg-neutral-100 border border-neutral-200/60">
                <span className="text-[10px] text-neutral-500 uppercase tracking-wider block">
                  {spec.label}
                </span>
                <span className="text-xs sm:text-sm font-bold font-mono text-neutral-900 mt-0.5 block">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-2">
              О решении
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              {category.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-2.5">
              Преимущества конструкции
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {category.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700 bg-white p-3 rounded-xl border border-neutral-200/70">
                  <span className="w-4 h-4 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5" />
                  </span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action */}
          <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-neutral-500">
              Бесплатный расчет сметы и 3D-визуализации
            </span>
            <button
              onClick={() => {
                onRequestCategoryQuote(category.title);
                onClose();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-950 text-white rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors shrink-0"
            >
              <span>Заказать расчёт {category.title.toLowerCase()}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
