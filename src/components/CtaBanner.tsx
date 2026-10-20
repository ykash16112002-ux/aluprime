import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface CtaBannerProps {
  onSuccessSubmit?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onSuccessSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Пожалуйста, введите ваше имя');
      return;
    }
    const cleanPhone = phone.replace(/[^\d+]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setError('Введите корректный номер телефона');
      return;
    }

    setError('');
    setSubmitted(true);
    if (onSuccessSubmit) onSuccessSubmit();
  };

  return (
    <section className="py-16 relative">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8">
        {/* Wide rounded container matching reference bottom card */}
        <div className="relative rounded-[2.5rem] bg-[#E9E6DF] border border-neutral-300/80 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-sm">
          {/* Subtle architectural glass glare effect */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/40 rounded-full blur-[100px] pointer-events-none" />

          {submitted ? (
            <div className="max-w-xl py-6 animate-fadeIn">
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 text-white flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mb-2">
                Спасибо за доверие, {name}!
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed mb-6">
                Ваша заявка передана в инженерное бюро Aluprime. Главный конструктор свяжется с вами в течение 15 минут для уточнения параметров объекта и согласования выезда на 3D-сканирование.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setPhone('');
                }}
                className="text-xs font-bold uppercase tracking-wider text-neutral-900 underline underline-offset-4 hover:text-neutral-700"
              >
                Отправить ещё одну заявку
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Column: Headline and text matching reference */}
              <div className="lg:col-span-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-950 tracking-[-0.03em] leading-tight mb-3">
                  Создадим остекление, которое подчеркнёт ваш интерьер
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-lg">
                  Оставьте заявку — наш ведущий инженер свяжется с вами, ответит на вопросы и предложит лучшее архитектурное решение.
                </p>
              </div>

              {/* Right Column: Clean input fields + Action Button */}
              <div className="lg:col-span-6">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 space-y-3 sm:space-y-0 sm:flex sm:gap-3">
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (error) setError('');
                      }}
                      className="w-full sm:w-1/2 px-4 py-3.5 rounded-full bg-white/90 border border-neutral-300 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    />
                    <input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (error) setError('');
                      }}
                      className="w-full sm:w-1/2 px-4 py-3.5 rounded-full bg-white/90 border border-neutral-300 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 font-mono"
                    />
                  </div>

                  {/* Dark pill submit button matching reference */}
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wide text-white bg-neutral-950 rounded-full hover:bg-neutral-800 active:scale-95 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 whitespace-nowrap shrink-0"
                  >
                    <span>Оставить заявку</span>
                    <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-white">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </button>
                </form>

                {error && (
                  <p className="text-xs text-red-600 mt-2 pl-4">
                    {error}
                  </p>
                )}

                <p className="text-[10px] text-neutral-500 mt-3 pl-2">
                  Нажимая кнопку, вы подтверждаете согласие на обработку персональных данных. Никакого спама — только профессиональная консультация инженера.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
