import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface ModalPrivacyProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalPrivacy: React.FC<ModalPrivacyProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#FAF9F7] rounded-[2.5rem] p-6 sm:p-8 shadow-2xl border border-neutral-200 overflow-hidden max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-neutral-200 hover:bg-neutral-900 hover:text-white flex items-center justify-center transition-colors text-neutral-700"
          aria-label="Закрыть"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-neutral-900 text-white flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-neutral-950">
              Политика конфиденциальности
            </h3>
            <p className="text-xs text-neutral-500">
              Aluprime · Редакция от 2026 года
            </p>
          </div>
        </div>

        <div className="overflow-y-auto space-y-4 text-xs sm:text-sm text-neutral-600 leading-relaxed pr-2">
          <p>
            Настоящая Политика конфиденциальности персональных данных действует в отношении всей информации, которую компания Aluprime может получить о пользователе во время использования официального сайта.
          </p>

          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mt-4">
            1. Сбор и использование персональных данных
          </h4>
          <p>
            Мы собираем только те данные (имя, номер телефона, параметры архитектурного объекта), которые необходимы для связи с инженером, расчёта сметы остекления и организации выезда на 3D-лазерное сканирование.
          </p>

          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mt-4">
            2. Конфиденциальность и безопасность
          </h4>
          <p>
            Мы гарантируем, что ваши контактные данные никогда не будут переданы третьим лицам или рекламным брокерам. Все проектные чертежи и расчёты являются строго конфиденциальной информацией заказчика.
          </p>

          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mt-4">
            3. Отсутствие спама
          </h4>
          <p>
            Номер телефона используется исключительно для прямой инженерной консультации ведущего специалиста проекта.
          </p>
        </div>

        <div className="pt-6 border-t border-neutral-200 mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-neutral-950 text-white rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
          >
            Понятно
          </button>
        </div>
      </div>
    </div>
  );
};
