import React, { useState } from 'react';
import { ArrowUpRight, Check, Sliders, Sparkles, Ruler } from 'lucide-react';
import { CalculatorState } from '../types';

interface CalculatorProps {
  onOpenConsultationWithData: (summary: string) => void;
}

export const CalculatorSection: React.FC<CalculatorProps> = ({
  onOpenConsultationWithData,
}) => {
  const [config, setConfig] = useState<CalculatorState>({
    type: 'panoramic',
    profile: 'schuco',
    glassType: 'climaguard',
    width: 4.5,
    height: 3.0,
    leaves: 3,
    withInstallation: true,
    withSmartTint: false,
  });

  const glazingTypes = [
    { id: 'panoramic', title: 'Панорамный HS-портал', baseM2: 42000, desc: 'Раздвижные порталы в пол' },
    { id: 'storefront', title: 'Фасадная витрина', baseM2: 38000, desc: 'Джамбо-стекло для бутиков' },
    { id: 'frameless', title: 'Безрамная трансформер', baseM2: 34000, desc: 'Складные системы для террас' },
    { id: 'balcony', title: 'Тёплый контур лоджии', baseM2: 29000, desc: 'Шумоизоляция и терморазрыв' },
  ];

  const profileOptions = [
    { id: 'schuco', name: 'Schüco ASE 80.HI (Германия)', mult: 1.25, badge: 'Премиум эталон' },
    { id: 'reynaers', name: 'Reynaers Hi-Finity (Бельгия)', mult: 1.30, badge: 'Ультратонкий 21 мм' },
    { id: 'alutech', name: 'Alutech SL160 Pro (Индивидуальный)', mult: 1.0, badge: 'Оптимальный баланс' },
  ];

  const glassOptions = [
    { id: 'climaguard', name: 'Guardian ClimaGuard Solar', desc: 'Защита от перегрева летом и теплосбережение зимой', addPerM2: 3200 },
    { id: 'optiwhite', name: 'AGC Optiwhite Crystal (просветлённое)', desc: '99% прозрачности без зелёного оттенка', addPerM2: 4800 },
    { id: 'triplex', name: 'Acoustic Triplex Safe RC3', desc: 'Взломостойкость и звукоизоляция 48 дБ', addPerM2: 5600 },
  ];

  // Calculation formula
  const currentType = glazingTypes.find((t) => t.id === config.type) || glazingTypes[0];
  const currentProfile = profileOptions.find((p) => p.id === config.profile) || profileOptions[0];
  const currentGlass = glassOptions.find((g) => g.id === config.glassType) || glassOptions[0];

  const area = Math.round(config.width * config.height * 10) / 10;
  const baseCost = area * currentType.baseM2 * currentProfile.mult;
  const glassCost = area * currentGlass.addPerM2;
  const smartTintCost = config.withSmartTint ? area * 14000 : 0;
  const installCost = config.withInstallation ? (baseCost + glassCost) * 0.18 : 0;

  const totalEstimate = Math.round((baseCost + glassCost + smartTintCost + installCost) / 1000) * 1000;

  const handleOrder = () => {
    const summary = `${currentType.title}, ${area} м² (${config.width}×${config.height} м), профиль ${currentProfile.name}, стеклопакет ${currentGlass.name}`;
    onOpenConsultationWithData(summary);
  };

  return (
    <section id="calculator" className="py-20 border-t border-neutral-200/80 relative">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-neutral-600 uppercase">
              ОНЛАЙН-КОНФИГУРАТОР
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-[-0.03em] leading-tight mb-3">
            Расчёт стоимости проекта
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed">
            Сконфигурируйте габариты, профильную систему и формулу остекления для получения предварительного технического расчёта.
          </p>
        </div>

        {/* 2-Column Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Left Column */}
          <div className="lg:col-span-7 bg-white/90 backdrop-blur-sm rounded-[2rem] p-6 sm:p-8 border border-neutral-200/80 shadow-sm space-y-8">
            {/* 1. Glazing Type */}
            <div>
              <label className="text-xs font-bold text-neutral-900 uppercase tracking-wider block mb-3">
                1. Выберите тип конструкции
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {glazingTypes.map((type) => {
                  const isSelected = config.type === type.id;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setConfig({ ...config, type: type.id })}
                      className={`text-left p-4 rounded-2xl border transition-all ${
                        isSelected
                          ? 'border-neutral-950 bg-neutral-950 text-white shadow-sm'
                          : 'border-neutral-200 bg-neutral-50/50 hover:bg-neutral-100 text-neutral-900'
                      }`}
                    >
                      <div className="text-xs sm:text-sm font-bold">{type.title}</div>
                      <div className={`text-[11px] mt-1 ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                        {type.desc}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Dimensions */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
                  2. Габариты светового проёма
                </label>
                <span className="text-xs font-mono font-bold text-neutral-800">
                  Площадь: {area} м²
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="flex justify-between text-xs text-neutral-600 mb-2">
                    <span>Ширина конструкции:</span>
                    <span className="font-mono font-bold text-neutral-900">{config.width} м</span>
                  </div>
                  <input
                    type="range"
                    min="1.5"
                    max="12.0"
                    step="0.1"
                    value={config.width}
                    onChange={(e) => setConfig({ ...config, width: parseFloat(e.target.value) })}
                    className="w-full accent-neutral-950 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-1">
                    <span>1.5 м</span>
                    <span>12.0 м</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-neutral-600 mb-2">
                    <span>Высота конструкции:</span>
                    <span className="font-mono font-bold text-neutral-900">{config.height} м</span>
                  </div>
                  <input
                    type="range"
                    min="2.0"
                    max="5.0"
                    step="0.1"
                    value={config.height}
                    onChange={(e) => setConfig({ ...config, height: parseFloat(e.target.value) })}
                    className="w-full accent-neutral-950 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-1">
                    <span>2.0 м</span>
                    <span>5.0 м</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Profile System */}
            <div>
              <label className="text-xs font-bold text-neutral-900 uppercase tracking-wider block mb-3">
                3. Профильная система
              </label>
              <div className="space-y-2">
                {profileOptions.map((prof) => {
                  const isSelected = config.profile === prof.id;
                  return (
                    <button
                      key={prof.id}
                      onClick={() => setConfig({ ...config, profile: prof.id })}
                      className={`w-full text-left p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                        isSelected
                          ? 'border-neutral-950 bg-neutral-900 text-white'
                          : 'border-neutral-200 hover:bg-neutral-50 text-neutral-800'
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-semibold">{prof.name}</span>
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-neutral-100 text-neutral-600'
                      }`}>
                        {prof.badge}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Glass Package */}
            <div>
              <label className="text-xs font-bold text-neutral-900 uppercase tracking-wider block mb-3">
                4. Формула стеклопакета
              </label>
              <div className="space-y-2">
                {glassOptions.map((g) => {
                  const isSelected = config.glassType === g.id;
                  return (
                    <button
                      key={g.id}
                      onClick={() => setConfig({ ...config, glassType: g.id })}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                        isSelected
                          ? 'border-neutral-950 bg-neutral-100 text-neutral-950 ring-1 ring-neutral-950'
                          : 'border-neutral-200 hover:bg-neutral-50 text-neutral-800'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-bold">{g.name}</span>
                        {isSelected && <Check className="w-4 h-4 text-neutral-950" />}
                      </div>
                      <p className="text-[11px] text-neutral-500 mt-0.5 leading-snug">
                        {g.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Add-ons */}
            <div className="pt-4 border-t border-neutral-200/80 flex flex-col sm:flex-row gap-4">
              <label className="flex items-center gap-3 cursor-pointer text-xs font-medium text-neutral-700">
                <input
                  type="checkbox"
                  checked={config.withInstallation}
                  onChange={(e) => setConfig({ ...config, withInstallation: e.target.checked })}
                  className="w-4 h-4 rounded text-neutral-900 focus:ring-neutral-900 accent-neutral-950"
                />
                <span>Чистовой монтаж по стандартам RAL с гарантией 15 лет</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer text-xs font-medium text-neutral-700">
                <input
                  type="checkbox"
                  checked={config.withSmartTint}
                  onChange={(e) => setConfig({ ...config, withSmartTint: e.target.checked })}
                  className="w-4 h-4 rounded text-neutral-900 focus:ring-neutral-900 accent-neutral-950"
                />
                <span>Электрохромное смарт-затемнение (Smart Glass)</span>
              </label>
            </div>
          </div>

          {/* Blueprint & Estimate Card Right Column */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            {/* Visual Schematic Box */}
            <div className="bg-neutral-900 text-white rounded-[2rem] p-6 sm:p-7 shadow-xl border border-neutral-800">
              <div className="flex items-center justify-between mb-4 border-b border-neutral-800 pb-3">
                <span className="text-xs font-mono text-neutral-400">
                  Чертёжный эскиз · М 1:50
                </span>
                <span className="text-[11px] font-mono text-neutral-300">
                  {config.width} × {config.height} м
                </span>
              </div>

              {/* Vector Blueprint Diagram */}
              <div className="aspect-[16/10] bg-neutral-950 rounded-xl p-4 flex items-center justify-center relative overflow-hidden border border-neutral-800/80">
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #404040 1px, transparent 1px), linear-gradient(to bottom, #404040 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                  }}
                />

                {/* Drawn Window/Portal Portal Frame */}
                <div className="relative border-2 border-neutral-300 w-[85%] h-[80%] flex items-center justify-center bg-neutral-900/60">
                  {/* Vertical dividing mullions */}
                  <div className="absolute inset-y-0 left-1/3 border-r-2 border-neutral-400 flex items-center justify-center">
                    <span className="w-1.5 h-6 bg-neutral-200 rounded-full" />
                  </div>
                  <div className="absolute inset-y-0 right-1/3 border-r-2 border-neutral-400 flex items-center justify-center">
                    <span className="w-1.5 h-6 bg-neutral-200 rounded-full" />
                  </div>

                  {/* Dimension labels */}
                  <div className="absolute -top-5 text-[10px] font-mono text-neutral-400">
                    ← {config.width} м →
                  </div>
                  <div className="absolute -left-6 top-1/2 -rotate-90 text-[10px] font-mono text-neutral-400">
                    {config.height} м
                  </div>

                  <span className="text-[10px] font-mono text-neutral-400/80 uppercase tracking-widest">
                    {currentType.title}
                  </span>
                </div>
              </div>

              {/* Estimate Calculation Breakdown */}
              <div className="mt-6 pt-5 border-t border-neutral-800 space-y-3">
                <div className="flex justify-between text-xs text-neutral-400">
                  <span>Объём остекления</span>
                  <span className="text-white font-mono">{area} м²</span>
                </div>
                <div className="flex justify-between text-xs text-neutral-400">
                  <span>Профиль</span>
                  <span className="text-white font-mono text-right">{currentProfile.name.split(' (')[0]}</span>
                </div>
                <div className="flex justify-between text-xs text-neutral-400">
                  <span>Стеклопакет</span>
                  <span className="text-white font-mono text-right">{currentGlass.name.split(' (')[0]}</span>
                </div>

                <div className="pt-4 border-t border-neutral-800 flex items-baseline justify-between">
                  <div>
                    <span className="text-xs text-neutral-400 block">Предварительный расчёт:</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight tabular-nums">
                      от {totalEstimate.toLocaleString('ru-RU')} ₽
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-neutral-400 pt-1 leading-relaxed">
                  *Включает заводской раскрой, фурнитуру, доставку спецтранспортом и шеф-монтаж. Точная смета формируется после лазерного 3D-замера.
                </p>

                <button
                  onClick={handleOrder}
                  className="w-full mt-4 py-3.5 bg-white text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-neutral-100 active:scale-98 transition-all flex items-center justify-center gap-2"
                >
                  <span>Зафиксировать расчёт и вызвать инженера</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
