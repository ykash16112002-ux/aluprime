import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export const ContactsView: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSent(true);
  };

  return (
    <div className="pt-28 sm:pt-36 pb-20">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8">
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-neutral-600 uppercase">
              КОНТАКТЫ И ШОУРУМ
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-950 tracking-[-0.035em] leading-tight mb-4">
            Будем рады видеть вас в нашем шоуруме
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Познакомьтесь с образцами профильных систем, тактильно оцените мягкость скольжения 600-килограммовых створок и обсудите проект с ведущим инженером.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details Left */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-[2rem] p-8 border border-neutral-200/80 shadow-sm space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0 text-neutral-900">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-neutral-400 block tracking-wider">
                    Адрес шоурума и КБ
                  </span>
                  <p className="text-sm font-semibold text-neutral-900 mt-1">
                    Москва, ул. Архитектора Власова, 18
                  </p>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Бизнес-центр «Парк», 1 этаж (отдельный вход, гостевой паркинг)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0 text-neutral-900">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-neutral-400 block tracking-wider">
                    Телефон
                  </span>
                  <a
                    href="tel:+74951207845"
                    className="text-base font-bold text-neutral-900 font-mono hover:text-neutral-700 transition-colors mt-1 block"
                  >
                    +7 (495) 120-78-45
                  </a>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Многоканальный, инженер дежурит ежедневно
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0 text-neutral-900">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-neutral-400 block tracking-wider">
                    Электронная почта
                  </span>
                  <a
                    href="mailto:info@aluprime.ru"
                    className="text-sm font-semibold text-neutral-900 hover:text-neutral-700 transition-colors mt-1 block"
                  >
                    info@aluprime.ru
                  </a>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Для архитектурных чертежей и проектных заданий
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0 text-neutral-900">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-neutral-400 block tracking-wider">
                    График работы
                  </span>
                  <p className="text-sm font-semibold text-neutral-900 mt-1">
                    Пн — Вс: 09:00 — 21:00
                  </p>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    По предварительной договоренности возможен визит в любое время
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form & Map Mockup Right */}
          <div className="lg:col-span-7 bg-white rounded-[2rem] p-8 border border-neutral-200/80 shadow-sm">
            {sent ? (
              <div className="py-12 text-center animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-neutral-950 text-white flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-950 mb-2">
                  Спасибо, {name}!
                </h3>
                <p className="text-sm text-neutral-600 max-w-sm mx-auto mb-6">
                  Мы забронировали для вас время встречи в шоуруме. Инженер подготовит образцы профилей и свяжется с вами для подтверждения.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setName('');
                    setPhone('');
                    setComment('');
                  }}
                  className="px-6 py-2.5 bg-neutral-950 text-white rounded-full text-xs font-semibold uppercase tracking-wider"
                >
                  Заполнить снова
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-neutral-950 mb-1">
                  Записаться на встречу в шоуруме
                </h3>
                <p className="text-xs text-neutral-500 mb-6">
                  Заполните форму, и мы организуем демонстрацию образцов и парковочное место.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-neutral-700 block mb-1.5">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Иван"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-neutral-50 rounded-xl border border-neutral-200 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-neutral-700 block mb-1.5">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (___) ___-__-__"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-neutral-50 rounded-xl border border-neutral-200 text-sm text-neutral-900 font-mono focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-700 block mb-1.5">
                    Удобная дата или пожелания к проекту
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Например: вторник, 15:00. Интересуют подъемно-сдвижные порталы в загородный дом."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full px-4 py-3 bg-neutral-50 rounded-xl border border-neutral-200 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-neutral-950 text-white rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors shadow-sm"
                >
                  Забронировать визит
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
