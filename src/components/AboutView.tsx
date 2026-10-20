import React from 'react';
import { ShieldCheck, Award, Building2, Check, Clock, Users } from 'lucide-react';
import { ProductionFacilityVisual } from './ArchitecturalVisuals';

export const AboutView: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  return (
    <div className="pt-28 sm:pt-36 pb-20">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-neutral-600 uppercase">
              О КОМПАНИИ ALUPRIME
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-950 tracking-[-0.035em] leading-tight mb-6">
            Инженерия света и бескомпромиссная эстетика с 2012 года
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Мы объединили собственное высокоточное ЧПУ-производство, опыт ведущих инженеров-конструкторов и прямые поставки премиальных немецких систем Schüco и бельгийских Reynaers, чтобы создавать остекление, расширяющее границы архитектуры.
          </p>
        </div>

        {/* Visual + Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          <div className="lg:col-span-6">
            <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-neutral-200 shadow-md">
              <ProductionFacilityVisual className="w-full h-full" />
            </div>
          </div>
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
              Никаких типовых шаблонов — только кастомная архитектура
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Каждый дом уникален. Мы проектируем узлы примыкания индивидуально под ветровые нагрузки местности, высоту этажа и особенности фасадного контура. Наше конструкторское бюро моделирует тепловые поля и сопротивление теплопередаче ещё до запуска профилей в цех.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-200">
              <div className="p-4 rounded-2xl bg-white border border-neutral-200">
                <span className="text-2xl font-bold font-mono text-neutral-950 block">14 лет</span>
                <span className="text-xs text-neutral-500">безупречной работы на рынке</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-neutral-200">
                <span className="text-2xl font-bold font-mono text-neutral-950 block">4 800 м²</span>
                <span className="text-xs text-neutral-500">площадь собственного производства</span>
              </div>
            </div>
          </div>
        </div>

        {/* Standards & Philosophy */}
        <div className="rounded-[2.5rem] bg-[#EAE6DF] border border-neutral-300 p-8 sm:p-12 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 mb-8 tracking-tight">
            Принципы работы ALUPRIME
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-neutral-200/80">
              <ShieldCheck className="w-6 h-6 text-neutral-900 mb-3" />
              <h3 className="text-base font-bold text-neutral-900 mb-2">Официальная гарантия 15 лет</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Выдаем паспорт объекта с индивидуальным серийным номером. Бесплатное сервисное регулирование фурнитуры через 1 год эксплуатации.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-neutral-200/80">
              <Clock className="w-6 h-6 text-neutral-900 mb-3" />
              <h3 className="text-base font-bold text-neutral-900 mb-2">Точность сроков по договору</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Автоматизация цеха гарантирует изготовление строго по согласованному календарному графику без задержек.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-neutral-200/80">
              <Users className="w-6 h-6 text-neutral-900 mb-3" />
              <h3 className="text-base font-bold text-neutral-900 mb-2">Аттестованные монтажники</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Все бригады сертифицированы в академиях Schüco и Reynaers. Работа со стеклом джамбо-формата и вакуумными роботами-манипуляторами.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center max-w-xl mx-auto">
          <h3 className="text-2xl font-bold text-neutral-950 mb-3">
            Посетите наш флагманский шоурум в Москве
          </h3>
          <p className="text-sm text-neutral-600 mb-6">
            В шоуруме представлены полноразмерные действующие порталы Schüco ASE 80, образцы безрамного остекления и образцы стекла Guardian с разной степенью солнцезащиты.
          </p>
          <button
            onClick={onOpenConsultation}
            className="px-8 py-3.5 bg-neutral-950 text-white rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors shadow-sm"
          >
            Записаться на визит в шоурум
          </button>
        </div>
      </div>
    </div>
  );
};
