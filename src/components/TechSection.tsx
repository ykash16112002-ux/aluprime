import React from 'react';
import { Cpu, PenTool, CheckCircle, Award } from 'lucide-react';
import { TECH_SPECS, KEY_METRICS, PRODUCTION_PHOTO } from '../data/content';
import { ProductionFacilityVisual } from './ArchitecturalVisuals';
import { SmartImage } from './SmartImage';

interface TechSectionProps {
  onOpenVideoTour: () => void;
  onOpenConsultation: () => void;
}

export const TechSection: React.FC<TechSectionProps> = ({
  onOpenVideoTour,
}) => {
  const specIcons = [
    <Cpu key="1" className="w-4 h-4 text-neutral-800" />,
    <PenTool key="2" className="w-4 h-4 text-neutral-800" />,
    <CheckCircle key="3" className="w-4 h-4 text-neutral-800" />,
    <Award key="4" className="w-4 h-4 text-neutral-800" />,
  ];

  return (
    <section className="py-20 border-t border-neutral-200/80 relative">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8">
        {/* Layout matching exact 3-column / split composition of reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Text Column: Headline, subtext, link */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                <span className="text-[11px] font-semibold tracking-[0.2em] text-neutral-600 uppercase">
                  ПРОИЗВОДСТВО
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-[-0.03em] leading-tight mb-5">
                Технологии точности
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed mb-8">
                Собственное производство полного цикла позволяет контролировать качество на каждом этапе — от лазерного 3D-сканирования проёмов до чистового монтажа.
              </p>
            </div>

            <button
              onClick={onOpenVideoTour}
              className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-800 hover:text-neutral-950 transition-colors group self-start"
            >
              <span>Экскурсия по производству</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          {/* Center Column: High-tech CNC facility visual with real photo */}
          <div className="lg:col-span-4">
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden border border-neutral-200 shadow-md">
              <SmartImage
                src={PRODUCTION_PHOTO}
                alt="Высокоточное ЧПУ производство остекления"
                className="w-full h-full"
                fallbackNode={<ProductionFacilityVisual className="w-full h-full" />}
              />
            </div>
          </div>

          {/* Right Column: 4 Features + 4 Quantitative Metrics */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {/* List of 4 features */}
            <div className="space-y-4">
              {TECH_SPECS.map((spec, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-neutral-100 border border-neutral-200/60 flex items-center justify-center shrink-0 mt-0.5">
                    {specIcons[i]}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-neutral-900 leading-snug">
                      {spec.title}
                    </h3>
                    <p className="text-[11px] text-neutral-500 leading-snug mt-0.5">
                      {spec.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Metrics column with bold tabular numbers */}
            <div className="pt-4 lg:pt-6 border-t border-neutral-200/70 grid grid-cols-2 gap-4">
              {KEY_METRICS.map((metric, i) => (
                <div key={i}>
                  <div className="text-xl sm:text-2xl font-extrabold text-neutral-950 font-mono tracking-tight tabular-nums">
                    {metric.value}
                  </div>
                  <div className="text-[11px] text-neutral-500 leading-tight mt-0.5">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
