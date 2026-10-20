import React from 'react';
import { Eye, ShieldCheck, Sun, ThermometerSnowflake, Check } from 'lucide-react';
import { PRODUCT_ADVANTAGES } from '../data/content';

export const ProductShowcase: React.FC<{ onOpenConsultation: () => void }> = ({
  onOpenConsultation,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'sparkles':
        return <Sun className="w-5 h-5 text-neutral-900" />;
      case 'shield':
        return <ShieldCheck className="w-5 h-5 text-neutral-900" />;
      case 'eye':
        return <Eye className="w-5 h-5 text-neutral-900" />;
      case 'thermometer':
        return <ThermometerSnowflake className="w-5 h-5 text-neutral-900" />;
      default:
        return <Sun className="w-5 h-5 text-neutral-900" />;
    }
  };

  return (
    <section className="py-20 border-t border-neutral-200/80 relative">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-neutral-600 uppercase">
              О ПРОДУКТЕ И ТЕХНОЛОГИЯХ
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-[-0.03em] leading-tight text-balance mb-4">
            Безупречная физика стекла и света
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            В конструкциях Aluprime стекло перестаёт быть просто ограждением — оно превращается в инструмент светового комфорта, абсолютной тишины и терморегуляции.
          </p>
        </div>

        {/* 4 Cards Grid - Premium minimal styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCT_ADVANTAGES.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-7 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-neutral-900/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Metric pill header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-950 group-hover:text-white transition-colors duration-200">
                    <span className="group-hover:[&_svg]:text-white transition-colors">
                      {getIcon(item.icon)}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold font-mono text-neutral-900 block">
                      {item.stat}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400">
                      стандарт
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-neutral-950 tracking-tight mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-[11px] text-neutral-500 font-medium">
                  {item.statLabel}
                </span>
                <span className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-800 group-hover:bg-neutral-950 group-hover:text-white transition-colors">
                  <Check className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
