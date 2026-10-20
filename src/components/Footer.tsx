import React from 'react';
import { PageTab } from '../types';
import { Send, MessageCircle, Youtube, Globe } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: PageTab) => void;
  onOpenPrivacy: () => void;
  onOpenConsultation: () => void;
  onOpenGitHubPages?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTab,
  onOpenPrivacy,
  onOpenConsultation,
  onOpenGitHubPages,
}) => {
  return (
    <footer className="pt-16 pb-12 border-t border-neutral-200/80 bg-[#F9F9F8]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8">
        {/* Main 4-Column Layout matching reference exactly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-neutral-200/70">
          {/* Col 1: Wordmark & Tagline */}
          <div className="lg:col-span-3">
            <button
              onClick={() => {
                onSelectTab('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left group flex flex-col focus:outline-none mb-3"
            >
              <span className="text-xl font-extrabold tracking-tight text-neutral-900 font-sans uppercase">
                ALUPRIME
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-medium -mt-1 group-hover:text-neutral-800 transition-colors">
                архитектурное остекление
              </span>
            </button>
            <p className="text-xs text-neutral-500 leading-relaxed max-w-xs mt-3">
              Проектирование, производство и прецизионный монтаж панорамного остекления, безрамных систем и фасадных витрин для частных и коммерческих пространств.
            </p>
          </div>

          {/* Col 2: Каталог */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-4">
              Каталог
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-600">
              <li>
                <button
                  onClick={() => onSelectTab('catalog')}
                  className="hover:text-neutral-950 transition-colors text-left"
                >
                  Панорамные порталы HS
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('catalog')}
                  className="hover:text-neutral-950 transition-colors text-left"
                >
                  Фасадные витрины для бизнеса
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('catalog')}
                  className="hover:text-neutral-950 transition-colors text-left"
                >
                  Безрамное остекление
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('catalog')}
                  className="hover:text-neutral-950 transition-colors text-left"
                >
                  Тёплые балконы и лоджии
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: О компании */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-4">
              О компании
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-600">
              <li>
                <button
                  onClick={() => onSelectTab('about')}
                  className="hover:text-neutral-950 transition-colors"
                >
                  О нас
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('tech')}
                  className="hover:text-neutral-950 transition-colors"
                >
                  Производство
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('tech')}
                  className="hover:text-neutral-950 transition-colors"
                >
                  Материалы и профили
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenConsultation}
                  className="hover:text-neutral-950 transition-colors"
                >
                  Гарантия и сервис
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Контакты & Соцсети */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-4">
                Контакты
              </h4>
              <div className="space-y-1.5 text-xs text-neutral-600">
                <a
                  href="tel:+74951207845"
                  className="block font-semibold text-neutral-900 font-mono hover:text-neutral-700 transition-colors text-sm"
                >
                  +7 (495) 120-78-45
                </a>
                <a
                  href="mailto:info@aluprime.ru"
                  className="block text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  info@aluprime.ru
                </a>
                <p className="text-neutral-500 pt-1">
                  Москва, ул. Архитектора Власова, 18 (Шоурум и КБ)
                </p>
                <p className="text-neutral-400 text-[11px]">
                  Ежедневно с 09:00 до 21:00
                </p>
              </div>
            </div>

            <div className="mt-6">
              <span className="text-[11px] font-semibold text-neutral-800 uppercase tracking-wider block mb-2.5">
                Мы в соцсетях
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-neutral-300 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white flex items-center justify-center text-neutral-700 transition-all"
                  aria-label="Telegram"
                >
                  <Send className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-neutral-300 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white flex items-center justify-center text-neutral-700 transition-all"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-neutral-300 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white flex items-center justify-center text-neutral-700 transition-all"
                  aria-label="YouTube"
                >
                  <Youtube className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenConsultation();
                  }}
                  className="w-8 h-8 rounded-full border border-neutral-300 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white flex items-center justify-center text-neutral-700 transition-all"
                  aria-label="Web showcase"
                >
                  <Globe className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, GitHub Pages & Privacy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© ALUPRIME, 2026. Все права защищены.</p>

          <div className="flex items-center gap-4 text-[11px]">
            {onOpenGitHubPages && (
              <button
                onClick={onOpenGitHubPages}
                className="hover:text-neutral-900 transition-colors underline underline-offset-4 flex items-center gap-1.5 font-medium text-neutral-700"
              >
                <span>Инструкция GitHub Pages</span>
              </button>
            )}

            <button
              onClick={onOpenPrivacy}
              className="hover:text-neutral-900 transition-colors underline underline-offset-4"
            >
              Политика конфиденциальности
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
