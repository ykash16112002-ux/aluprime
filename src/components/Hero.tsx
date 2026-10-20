import React, { useState } from 'react';
import { ArrowUpRight, Play, Compass, Layers, Ruler, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { HeroGlazingVisual } from './ArchitecturalVisuals';
import { SmartImage } from './SmartImage';
import { HERO_SLIDES, PILLARS } from '../data/content';

interface HeroProps {
  onOpenConsultation: () => void;
  onOpenVideoTour: () => void;
  onNavigateToCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onOpenVideoTour,
  onNavigateToCalculator,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slide = HERO_SLIDES[currentSlide];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const pillarIcons = [
    <Compass key="1" className="w-5 h-5 text-neutral-800" />,
    <Layers key="2" className="w-5 h-5 text-neutral-800" />,
    <Ruler key="3" className="w-5 h-5 text-neutral-800" />,
    <Shield key="4" className="w-5 h-5 text-neutral-800" />,
  ];

  return (
    <section className="relative pt-28 sm:pt-36 pb-14 overflow-hidden">
      {/* 
        Abstract blurred building photo background as requested by user 
        matching the soft luminous glass building background in the reference 
      */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-20 -right-20 w-[65vw] max-w-[1000px] h-[95%] opacity-35 sm:opacity-45 mix-blend-multiply">
          <img
            key={slide.blurredBgUrl}
            src={slide.blurredBgUrl}
            alt="Abstract glass building background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover rounded-bl-[160px] filter blur-[24px] scale-110 transition-opacity duration-1000"
          />
        </div>
        {/* Soft gradient mask ensuring text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F9F9F8] via-[#F9F9F8]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F9F9F8]/40 to-[#F9F9F8]" />
      </div>

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 relative z-10">
        {/* Main 2-Column Split: Content Left, Architectural Visual Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch min-h-[560px]">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2 pr-0 lg:pr-8 z-10">
            <div>
              {/* Kicker tag with subtle dot matching reference */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                <span className="text-[11px] font-semibold tracking-[0.22em] text-neutral-600 uppercase">
                  {slide.kicker.replace('• ', '')}
                </span>
              </div>

              {/* Massive Hero Headline matching reference typography */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.8rem] font-bold text-neutral-950 tracking-[-0.035em] leading-[1.08] mb-6 text-balance">
                {slide.title}
              </h1>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-xl mb-10">
                {slide.subtitle}
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12">
                {/* Primary Pill Button */}
                <button
                  onClick={onNavigateToCalculator}
                  className="inline-flex items-center gap-3 pl-6 pr-2 py-3 text-sm font-semibold tracking-wide text-white bg-neutral-950 rounded-full hover:bg-neutral-800 active:scale-95 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-900/20 whitespace-nowrap"
                >
                  <span>Рассчитать стоимость</span>
                  <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center text-white">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </button>

                {/* Secondary Ghost Video Tour Button */}
                <button
                  onClick={onOpenVideoTour}
                  className="group inline-flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-800 hover:text-neutral-950 transition-colors focus:outline-none whitespace-nowrap"
                >
                  <span className="w-8 h-8 rounded-full border border-neutral-300 group-hover:border-neutral-900 flex items-center justify-center transition-colors">
                    <Play className="w-3.5 h-3.5 fill-neutral-800 text-neutral-800 ml-0.5" />
                  </span>
                  <span className="text-xs sm:text-sm font-medium">Смотреть видео о производстве</span>
                </button>
              </div>
            </div>

            {/* Slider Pagination Controls: "01 / 04" */}
            <div className="pt-6 border-t border-neutral-200/70 flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs font-mono font-medium text-neutral-500">
                <span className="text-neutral-950 font-bold text-sm">
                  0{currentSlide + 1}
                </span>
                <span className="text-neutral-300">/</span>
                <span>0{HERO_SLIDES.length}</span>
                <div className="hidden sm:flex items-center gap-1.5 ml-2">
                  {HERO_SLIDES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`h-1 transition-all rounded-full ${
                        currentSlide === i ? 'w-6 bg-neutral-950' : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-full border border-neutral-200 hover:border-neutral-900 flex items-center justify-center text-neutral-700 hover:text-neutral-950 transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-8 h-8 rounded-full border border-neutral-200 hover:border-neutral-900 flex items-center justify-center text-neutral-700 hover:text-neutral-950 transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Real Architectural Visual & Floating Badge */}
          <div className="lg:col-span-5 relative flex items-center">
            <div className="w-full h-full min-h-[460px] lg:min-h-[580px] relative">
              {/* Real architectural glass photo in rounded-3xl container */}
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden border border-neutral-200/90 shadow-2xl relative">
                <SmartImage
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="w-full h-full"
                  fallbackNode={<HeroGlazingVisual className="w-full h-full" />}
                />
                
                {/* Subtle soft gradient scrim for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge (matching reference card in top right of hero visual) */}
              <div className="absolute top-6 right-6 max-w-[240px] bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-[0_12px_32px_rgba(0,0,0,0.12)] border border-neutral-100/90 z-20">
                <div className="w-8 h-8 rounded-xl bg-neutral-900 text-white flex items-center justify-center mb-3">
                  <Layers className="w-4 h-4" />
                </div>
                <h2 className="text-xs font-semibold text-neutral-900 leading-snug mb-3">
                  {slide.stats}
                </h2>

                {/* Avatar cluster and counter */}
                <div className="flex items-center gap-2 pt-2 border-t border-neutral-100">
                  <div className="flex -space-x-2 overflow-hidden">
                    <span className="inline-block h-6 w-6 rounded-full bg-neutral-800 ring-2 ring-white text-[9px] font-bold text-white flex items-center justify-center">
                      AG
                    </span>
                    <span className="inline-block h-6 w-6 rounded-full bg-neutral-600 ring-2 ring-white text-[9px] font-bold text-white flex items-center justify-center">
                      SC
                    </span>
                    <span className="inline-block h-6 w-6 rounded-full bg-neutral-900 ring-2 ring-white text-[9px] font-bold text-white flex items-center justify-center">
                      RN
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-neutral-800 tracking-tight font-mono">
                    {slide.count}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Strip below hero (Identical to 4 columns in reference) */}
        <div className="mt-14 pt-8 border-t border-neutral-200/90 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {PILLARS.map((item, idx) => (
            <div key={item.id} className="flex items-start gap-3.5 group">
              <div className="w-9 h-9 rounded-xl bg-neutral-100 border border-neutral-200/80 flex items-center justify-center shrink-0 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-200">
                <span className="group-hover:[&_svg]:text-white transition-colors">
                  {pillarIcons[idx]}
                </span>
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-neutral-900 tracking-tight leading-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-neutral-500 leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
