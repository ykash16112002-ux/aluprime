import React, { useState } from 'react';
import { X, Play, Cpu, Sparkles, CheckCircle2, ShieldAlert } from 'lucide-react';
import { ProductionFacilityVisual } from './ArchitecturalVisuals';

interface ModalVideoTourProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ModalVideoTour: React.FC<ModalVideoTourProps> = ({
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  const [activeStep, setActiveStep] = useState(0);

  if (!isOpen) return null;

  const tourSteps = [
    {
      title: '01. Лазерное 3D-сканирование проёмов',
      desc: 'Инженер с оптическим сканером Faro Focus снимает геометрию объекта с точностью до 0.5 мм, учитывая отклонения стен и перекрытий.',
      time: '0:45',
    },
    {
      title: '02. Проектирование в КБ и статический расчёт',
      desc: 'Ветровые нагрузки моделируются по СП 20.13330. Разрабатываются индивидуальные узлы примыкания и теплотехнические схемы.',
      time: '1:20',
    },
    {
      title: '03. Раскрой профилей на 5-осевом ЧПУ elumatec',
      desc: 'Немецкие обрабатывающие центры производят фрезеровку технологических отверстий и запилы под углом 45° с погрешностью не более 0.02 мм.',
      time: '2:15',
    },
    {
      title: '04. Сборка стеклопакетов и заполнение аргоном',
      desc: 'В чистой комнате класса ISO 7 наносится двухкомпонентный полисульфидный герметик, исключающий разгерметизацию на 30+ лет.',
      time: '3:10',
    },
    {
      title: '05. Контроль ОТК и прецизионный монтаж',
      desc: 'Аттестованные мастера монтируют конструкции с лазерным нивелированием и пароизоляцией монтажного шва по ГОСТ 30971.',
      time: '4:00',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-[#FAF9F7] rounded-[2.5rem] shadow-2xl border border-neutral-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-white hover:text-neutral-900 flex items-center justify-center transition-colors"
          aria-label="Закрыть"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Video / Facility Visual viewport */}
        <div className="relative aspect-[16/9] w-full bg-neutral-950 shrink-0">
          <ProductionFacilityVisual className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Center Play Overlay / Step Title */}
          <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 block mb-1">
                Видеоэкскурсия по производству · Завод Aluprime
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                {tourSteps[activeStep].title}
              </h3>
            </div>
            <span className="text-xs font-mono text-neutral-400 bg-black/50 px-3 py-1 rounded-full border border-neutral-700">
              {tourSteps[activeStep].time}
            </span>
          </div>
        </div>

        {/* Step navigation and description */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <p className="text-sm text-neutral-700 leading-relaxed">
            {tourSteps[activeStep].desc}
          </p>

          {/* Stepper buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2 border-t border-neutral-200">
            {tourSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-2.5 rounded-xl text-left border transition-all ${
                  activeStep === idx
                    ? 'border-neutral-950 bg-neutral-950 text-white shadow-xs'
                    : 'border-neutral-200 bg-neutral-100 hover:bg-neutral-200/70 text-neutral-700'
                }`}
              >
                <span className="text-[10px] font-mono block opacity-70">Этап 0{idx + 1}</span>
                <span className="text-xs font-semibold block truncate mt-0.5">
                  {step.title.split('. ')[1]}
                </span>
              </button>
            ))}
          </div>

          {/* Bottom Actions */}
          <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-neutral-500">
              Приглашаем архитекторов и заказчиков на персональную экскурсию на завод
            </span>
            <button
              onClick={() => {
                onOpenConsultation();
                onClose();
              }}
              className="w-full sm:w-auto px-6 py-3 bg-neutral-950 text-white rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
            >
              Записаться на экскурсию
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
