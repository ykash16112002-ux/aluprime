import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Phone, User, Calendar, MessageSquare, ArrowUpRight } from 'lucide-react';

interface ModalConsultationProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialNotes?: string;
}

export const ModalConsultation: React.FC<ModalConsultationProps> = ({
  isOpen,
  onClose,
  initialService = 'Панорамное остекление',
  initialNotes = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialService);
  const [notes, setNotes] = useState(initialNotes);
  const [time, setTime] = useState('Как можно скорее');
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialService) setService(initialService);
    if (initialNotes) setNotes(initialNotes);
  }, [initialService, initialNotes]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Пожалуйста, укажите ваше имя');
      return;
    }
    const cleanPhone = phone.replace(/[^\d+]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setError('Укажите корректный номер телефона для связи');
      return;
    }

    setError('');
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setName('');
    setPhone('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#FAF9F7] rounded-[2.5rem] p-6 sm:p-8 shadow-2xl border border-neutral-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-neutral-200/60 hover:bg-neutral-900 hover:text-white flex items-center justify-center transition-colors text-neutral-700"
          aria-label="Закрыть"
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-neutral-900 text-white flex items-center justify-center mx-auto mb-5 shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-950 mb-2">
              Заявка принята, {name}!
            </h3>
            <p className="text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed mb-6">
              Ведущий инженер-конструктор Aluprime получил параметры вашего объекта и свяжется с вами по номеру <span className="font-mono font-semibold text-neutral-900">{phone}</span> в течение 15 минут.
            </p>
            <button
              onClick={handleReset}
              className="px-8 py-3 bg-neutral-950 text-white rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
            >
              Отлично
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 block mb-1">
                ИНЖЕНЕРНОЕ БЮРО ALUPRIME
              </span>
              <h3 className="text-2xl font-bold text-neutral-950 tracking-tight">
                Консультация и выезд инженера
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                Бесплатный выезд с 3D-сканером Faro, подбор формулы стеклопакета и составление точной сметы.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-neutral-700 block mb-1.5">
                  Ваше имя
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="Александр"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (error) setError('');
                    }}
                    className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-neutral-700 block mb-1.5">
                  Телефон для связи
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    required
                    placeholder="+7 (999) 000-00-00"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (error) setError('');
                    }}
                    className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-neutral-700 block mb-1.5">
                    Тип остекления
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3 py-3 bg-white rounded-xl border border-neutral-200 text-xs text-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  >
                    <option value="Панорамное остекление (HS-порталы)">Панорамный портал</option>
                    <option value="Фасадные витрины для бизнеса">Фасадная витрина</option>
                    <option value="Безрамное остекление террасы">Безрамная терраса</option>
                    <option value="Тёплый балкон / лоджия">Тёплый балкон / лоджия</option>
                    <option value="Комплексный проект загородного дома">Комплекс загородного дома</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-700 block mb-1.5">
                    Удобное время звонка
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-neutral-400 absolute left-3 top-3.5" />
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full pl-9 pr-3 py-3 bg-white rounded-xl border border-neutral-200 text-xs text-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    >
                      <option value="Как можно скорее">Как можно скорее</option>
                      <option value="Сегодня с 14:00 до 18:00">Сегодня (14:00 - 18:00)</option>
                      <option value="Сегодня с 18:00 до 21:00">Сегодня (18:00 - 21:00)</option>
                      <option value="Завтра в первой половине дня">Завтра утром</option>
                    </select>
                  </div>
                </div>
              </div>

              {notes && (
                <div className="p-3 rounded-xl bg-neutral-100 border border-neutral-200 text-[11px] text-neutral-600">
                  <span className="font-semibold text-neutral-900 block mb-0.5">Параметры из конфигуратора:</span>
                  {notes}
                </div>
              )}

              {error && (
                <p className="text-xs text-red-600 font-medium">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="w-full mt-2 py-3.5 bg-neutral-950 text-white rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Заказать консультацию и замер</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-neutral-400 text-center leading-relaxed">
                Отправляя данные, вы соглашаетесь с условиями конфиденциальности. Без навязчивых предложений.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
