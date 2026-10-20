import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Phone, Building2 } from 'lucide-react';
import { PageTab } from '../types';

interface HeaderProps {
  currentTab: PageTab;
  onSelectTab: (tab: PageTab) => void;
  onOpenConsultation: (serviceType?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  onOpenConsultation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; tab: PageTab }[] = [
    { label: 'О нас', tab: 'about' },
    { label: 'Каталог', tab: 'catalog' },
    { label: 'Этапы работы', tab: 'tech' },
    { label: 'Проекты', tab: 'projects' },
    { label: 'Калькулятор', tab: 'calculator' },
    { label: 'Контакты', tab: 'contacts' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200/80 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
          : 'bg-white/80 backdrop-blur-xs py-4 sm:py-5 border-b border-neutral-100/60'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
        {/* 
          Zone 1: Brand Wordmark matching {75E3BA98-899F-446D-9E3B-A2FD15D5D8FD}.png
          Emblem + "ALUPRIME" + "архитектурное и фасадное остекление"
        */}
        <button
          onClick={() => {
            onSelectTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-left group flex items-center gap-3 focus:outline-none shrink-0"
        >
          {/* Architectural pillar logo mark */}
          <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-bold">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
              <rect x="4" y="3" width="4" height="18" rx="1" fill="currentColor" opacity="0.9" />
              <rect x="10" y="7" width="4" height="14" rx="1" fill="currentColor" opacity="0.7" />
              <rect x="16" y="11" width="4" height="10" rx="1" fill="currentColor" opacity="0.5" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 font-sans uppercase">
              ALUPRIME
            </span>
            <span className="text-[10px] tracking-tight text-neutral-500 font-normal -mt-0.5">
              архитектурное и фасадное остекление
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links matching user screenshot */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-700">
          {navLinks.map((item) => {
            const isActive = currentTab === item.tab;
            return (
              <button
                key={item.tab}
                onClick={() => {
                  onSelectTab(item.tab);
                }}
                className={`transition-colors whitespace-nowrap shrink-0 relative py-1 focus:outline-none ${
                  isActive
                    ? 'text-neutral-950 font-semibold'
                    : 'text-neutral-600 hover:text-neutral-950'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-neutral-900 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Phone */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            href="tel:+74951207845"
            className="hidden sm:flex items-center gap-2 text-xs font-semibold text-neutral-800 hover:text-neutral-950 transition-colors whitespace-nowrap"
          >
            <span className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center">
              <Phone className="w-3.5 h-3.5 text-neutral-800" />
            </span>
            <span className="font-mono tabular-nums">+7 (495) 120-78-45</span>
          </a>

          {/* Primary Pill Button */}
          <button
            onClick={() => onOpenConsultation()}
            className="inline-flex items-center gap-2 pl-4 pr-2.5 py-2 text-xs font-semibold tracking-wide text-white bg-neutral-950 rounded-full hover:bg-neutral-800 active:scale-95 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/20 whitespace-nowrap shrink-0"
          >
            <span>Связаться</span>
            <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white">
              <ArrowUpRight className="w-3 h-3" />
            </span>
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-neutral-800 hover:bg-neutral-200/50 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-6 py-6 space-y-4 shadow-xl">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((item) => (
              <button
                key={item.tab}
                onClick={() => {
                  onSelectTab(item.tab);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  currentTab === item.tab
                    ? 'bg-neutral-900 text-white'
                    : 'text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-neutral-200 flex flex-col gap-3">
            <a
              href="tel:+74951207845"
              className="text-sm font-semibold text-neutral-900 font-mono"
            >
              +7 (495) 120-78-45
            </a>
            <p className="text-xs text-neutral-500">
              Москва, ул. Архитектора Власова, 18
            </p>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 bg-neutral-900 text-white rounded-full text-xs font-semibold uppercase tracking-wider"
            >
              Начать сотрудничество
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
