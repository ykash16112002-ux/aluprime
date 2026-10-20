import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import heroBg from '../assets/hero-building.jpg';

interface BuildingHeroBannerProps {
  onOpenConsultation: () => void;
  onNavigateToCalculator: () => void;
}

/**
 * Hero Banner:
 * - Permanent architectural hero background photo uploaded by user
 * - Clean, natural rendering without artificial filters
 * - Premium architectural typography and call-to-actions
 * - Replacement controls removed as requested
 */
export const BuildingHeroBanner: React.FC<BuildingHeroBannerProps> = ({
  onOpenConsultation,
  onNavigateToCalculator,
}) => {
  return (
    <div className="relative w-full rounded-[2.2rem] sm:rounded-[2.8rem] overflow-hidden shadow-[0_20px_60px_rgba(20,30,45,0.15)] border border-neutral-300/80 bg-[#B2C6D5] min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex items-center group">
      {/* 
        HERO BACKGROUND VISUAL:
        Displays the permanent photo uploaded by the client in high quality with natural rendering.
      */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src={heroBg}
          alt="Архитектурное остекление современного здания"
          className="w-full h-full object-cover object-[78%_center]"
        />

        {/* Soft Left Gradient Vignette: Ensures 100% legibility of white typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#212E3B]/85 via-[#2C3E4F]/55 to-transparent w-[85%] sm:w-[70%] lg:w-[60%] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 
        Text Overlay: 100% focused on architectural glazing
      */}
      <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl text-white">
        {/* Kicker badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
            АРХИТЕКТУРНОЕ ОСТЕКЛЕНИЕ И ФАСАДЫ
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-[3.8rem] font-bold text-white tracking-[-0.035em] leading-[1.08] mb-5 text-balance drop-shadow-sm font-sans">
          Остекление
          <br />
          для бизнеса и жизни
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base lg:text-lg text-white/95 font-normal leading-relaxed mb-9 max-w-xl drop-shadow-xs">
          Панорамные порталы, витрины и фасадные конструкции — от лазерного сканирования проёма до чистового монтажа под ключ.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={onNavigateToCalculator}
            className="inline-flex items-center justify-center px-8 sm:px-9 py-3.5 sm:py-4 text-xs sm:text-sm font-bold tracking-wide text-neutral-900 bg-white rounded-full hover:bg-neutral-100 active:scale-95 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer"
          >
            <span>Рассчитать стоимость</span>
          </button>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold tracking-wide text-white bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/30 transition-all focus:outline-none cursor-pointer"
          >
            <span>Вызвать инженера на замер</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-10 pt-6 border-t border-white/25 flex flex-wrap items-center gap-6 text-xs text-white/85">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Официальная гарантия 15 лет</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white/60" />
            <span>Профили Schüco & Reynaers</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white/60" />
            <span>Собственное ЧПУ-производство</span>
          </div>
        </div>
      </div>
    </div>
  );
};
