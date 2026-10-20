/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageTab, ServiceCategory, ProjectItem } from './types';
import { AbstractGlassBackground } from './components/AbstractGlassBackground';
import { Header } from './components/Header';
import { BuildingHeroBanner } from './components/BuildingHeroBanner';
import { ProductShowcase } from './components/ProductShowcase';
import { CatalogSection } from './components/CatalogSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TechSection } from './components/TechSection';
import { CalculatorSection } from './components/CalculatorSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { AboutView } from './components/AboutView';
import { ContactsView } from './components/ContactsView';
import { ModalConsultation } from './components/ModalConsultation';
import { ModalCategoryDetail } from './components/ModalCategoryDetail';
import { ModalProjectDetail } from './components/ModalProjectDetail';
import { ModalVideoTour } from './components/ModalVideoTour';
import { ModalPrivacy } from './components/ModalPrivacy';
import { ModalGitHubPages } from './components/ModalGitHubPages';
import { PILLARS } from './data/content';
import { Compass, Layers, Ruler, Shield, ChevronRight, Home as HomeIcon, Github } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<PageTab>('home');
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationService, setConsultationService] = useState('Панорамное остекление');
  const [consultationNotes, setConsultationNotes] = useState('');
  const [isVideoTourOpen, setIsVideoTourOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isGitHubPagesOpen, setIsGitHubPagesOpen] = useState(false);

  const handleOpenConsultation = (serviceType = 'Панорамное остекление', notes = '') => {
    setConsultationService(serviceType);
    setConsultationNotes(notes);
    setIsConsultationOpen(true);
  };

  const handleTabChange = (tab: PageTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pillarIcons = [
    <Compass key="1" className="w-5 h-5 text-neutral-800" />,
    <Layers key="2" className="w-5 h-5 text-neutral-800" />,
    <Ruler key="3" className="w-5 h-5 text-neutral-800" />,
    <Shield key="4" className="w-5 h-5 text-neutral-800" />,
  ];

  const getPageTitle = (tab: PageTab) => {
    switch (tab) {
      case 'catalog':
        return 'Каталог систем остекления';
      case 'projects':
        return 'Портфолио реализованных объектов';
      case 'tech':
        return 'Технологии и производство';
      case 'calculator':
        return 'Инженерный калькулятор стоимости';
      case 'about':
        return 'О компании';
      case 'contacts':
        return 'Контакты и шоурум';
      default:
        return 'Главная';
    }
  };

  return (
    <div className="min-h-screen relative text-neutral-900 selection:bg-neutral-900 selection:text-white font-sans">
      {/* Ambient procedural architectural glass caustics & reflections */}
      <AbstractGlassBackground />

      {/* Fixed Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleTabChange}
        onOpenConsultation={() => handleOpenConsultation('Общая консультация')}
      />

      {/* Main Content Area: Multi-Page Architecture */}
      <main className="relative z-10">
        {/* Breadcrumb strip for multi-page subpages */}
        {currentTab !== 'home' && (
          <div className="pt-24 pb-2 max-w-[1360px] mx-auto px-6 sm:px-8">
            <nav className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
              <button
                onClick={() => handleTabChange('home')}
                className="hover:text-neutral-950 flex items-center gap-1 transition-colors"
              >
                <HomeIcon className="w-3.5 h-3.5" />
                <span>Главная</span>
              </button>
              <ChevronRight className="w-3 h-3 text-neutral-400" />
              <span className="text-neutral-900 font-semibold">{getPageTitle(currentTab)}</span>
            </nav>
          </div>
        )}

        {/* 1. ГЛАВНАЯ СТРАНИЦА (Home Page) */}
        {currentTab === 'home' && (
          <div className="pt-24 sm:pt-28 pb-12">
            <div className="max-w-[1360px] mx-auto px-6 sm:px-8">
              {/* Экран 1: Баннер здания со стеклами в точности по референсу пользователя */}
              <BuildingHeroBanner
                onOpenConsultation={() => handleOpenConsultation('Панорамное остекление')}
                onNavigateToCalculator={() => handleTabChange('calculator')}
              />

              {/* 4 Столпа надёжности под главным экраном (из референса) */}
              <div className="mt-12 pt-8 border-t border-neutral-200/90 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
                {PILLARS.map((item, idx) => (
                  <div key={item.id} className="flex items-start gap-3.5 group">
                    <div className="w-9 h-9 rounded-xl bg-neutral-100 border border-neutral-200/80 flex items-center justify-center shrink-0 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-200">
                      <span className="group-hover:[&_svg]:text-white transition-colors">
                        {pillarIcons[idx]}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-neutral-900 tracking-tight leading-tight mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-neutral-500 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Экран 2: О продукте / Витрина (Чистота линий, безопасность, максимальный обзор, энергосбережение) */}
            <ProductShowcase
              onOpenConsultation={() => handleOpenConsultation('Консультация по характеристикам стекла')}
            />

            {/* Экран 3: Каталог / Решения (4 карточки: панорамное, витрины, безрамное, балконы) */}
            <CatalogSection
              onSelectCategory={(category) => setSelectedCategory(category)}
              onOpenConsultation={(serviceTitle) => handleOpenConsultation(serviceTitle || 'Каталог остекления')}
            />

            {/* Экран 4: Производство и Технологии точности */}
            <TechSection
              onOpenVideoTour={() => setIsVideoTourOpen(true)}
              onOpenConsultation={() => handleOpenConsultation('Экскурсия и проект')}
            />

            {/* Экран 5: Портфолио / Галерея реализованных проектов */}
            <ProjectsSection
              onSelectProject={(project) => setSelectedProject(project)}
              onOpenConsultation={() => handleOpenConsultation('Проект из портфолио')}
            />

            {/* Экран 6: Форма захвата / Консультация */}
            <CtaBanner />
          </div>
        )}

        {/* 2. СТРАНИЦА КАТАЛОГА (Standalone Catalog Page) */}
        {currentTab === 'catalog' && (
          <div className="pb-16">
            <div className="max-w-[1360px] mx-auto px-6 sm:px-8 pt-4 pb-6">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight mb-2">
                Каталог светопрозрачных конструкций
              </h1>
              <p className="text-sm text-neutral-600 max-w-2xl leading-relaxed">
                Широкоформатные раздвижные порталы, спайдерные и стоечно-ригельные витрины, безрамные террасы и утепленные фасадные контуры.
              </p>
            </div>

            <CatalogSection
              onSelectCategory={(category) => setSelectedCategory(category)}
              onOpenConsultation={(serviceTitle) => handleOpenConsultation(serviceTitle || 'Каталог остекления')}
            />

            <ProductShowcase
              onOpenConsultation={() => handleOpenConsultation('Техническая консультация')}
            />

            <div className="max-w-[1360px] mx-auto px-6 sm:px-8 my-8 text-center bg-[#EAE6DF] rounded-[2rem] p-10 border border-neutral-300">
              <h3 className="text-2xl font-bold text-neutral-950 mb-2">
                Нужен индивидуальный чертежный расчёт?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-lg mx-auto mb-6">
                Конструкторское бюро Aluprime разработает проект под нестандартные радиусы, угловые стыки «стекло в стекло» и джамбо-габариты.
              </p>
              <button
                onClick={() => handleOpenConsultation('Индивидуальный проект из каталога')}
                className="px-8 py-3.5 bg-neutral-950 text-white rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
              >
                Отправить чертеж на расчёт
              </button>
            </div>

            <CtaBanner />
          </div>
        )}

        {/* 3. СТРАНИЦА ПРОЕКТОВ (Standalone Projects Page) */}
        {currentTab === 'projects' && (
          <div className="pb-16">
            <div className="max-w-[1360px] mx-auto px-6 sm:px-8 pt-4 pb-4">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight mb-2">
                Реализованные проекты остекления
              </h1>
              <p className="text-sm text-neutral-600 max-w-2xl leading-relaxed">
                Галерея частных резиденций, видовых пентхаусов и коммерческих фасадов, спроектированных и смонтированных нашей командой.
              </p>
            </div>

            <ProjectsSection
              onSelectProject={(project) => setSelectedProject(project)}
              onOpenConsultation={() => handleOpenConsultation('Проект из портфолио')}
            />

            <CtaBanner />
          </div>
        )}

        {/* 4. СТРАНИЦА ТЕХНОЛОГИЙ (Standalone Tech & Production Page) */}
        {currentTab === 'tech' && (
          <div className="pb-16">
            <div className="max-w-[1360px] mx-auto px-6 sm:px-8 pt-4 pb-4">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight mb-2">
                Производство и инженерные стандарты
              </h1>
              <p className="text-sm text-neutral-600 max-w-2xl leading-relaxed">
                Собственный завод площадью 4 800 м² с немецкими 5-осевыми обрабатывающими центрами elumatec и чистой комнатой сборки стеклопакетов.
              </p>
            </div>

            <TechSection
              onOpenVideoTour={() => setIsVideoTourOpen(true)}
              onOpenConsultation={() => handleOpenConsultation('Технологии и производство')}
            />

            <ProductShowcase
              onOpenConsultation={() => handleOpenConsultation('Консультация по технологиям')}
            />

            <CtaBanner />
          </div>
        )}

        {/* 5. СТРАНИЦА КАЛЬКУЛЯТОРА (Standalone Calculator Page) */}
        {currentTab === 'calculator' && (
          <div className="pb-16">
            <div className="max-w-[1360px] mx-auto px-6 sm:px-8 pt-4 pb-2">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight mb-2">
                Интерактивный расчёт стоимости
              </h1>
              <p className="text-sm text-neutral-600 max-w-2xl leading-relaxed">
                Задайте параметры остекления, выберите профильную систему и получите детальный предварительный расчёт сметы с чертежом.
              </p>
            </div>

            <CalculatorSection
              onOpenConsultationWithData={(summary) =>
                handleOpenConsultation('Расчёт из онлайн-конфигуратора', summary)
              }
            />

            <CtaBanner />
          </div>
        )}

        {/* 6. СТРАНИЦА О КОМПАНИИ (Standalone About Page) */}
        {currentTab === 'about' && (
          <AboutView
            onOpenConsultation={() => handleOpenConsultation('Визит в шоурум')}
          />
        )}

        {/* 7. СТРАНИЦА КОНТАКТОВ (Standalone Contacts Page) */}
        {currentTab === 'contacts' && <ContactsView />}
      </main>

      {/* Footer */}
      <Footer
        onSelectTab={handleTabChange}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenConsultation={() => handleOpenConsultation('Связь через подвал')}
        onOpenGitHubPages={() => setIsGitHubPagesOpen(true)}
      />

      {/* Floating GitHub Pages Helper Button */}
      <button
        onClick={() => setIsGitHubPagesOpen(true)}
        className="fixed bottom-5 left-5 z-40 bg-neutral-900/90 hover:bg-neutral-950 text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-lg backdrop-blur-md border border-neutral-700/50 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all group"
        title="Открыть инструкцию по выкладке на GitHub Pages"
      >
        <Github className="w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline">Выкладка на GitHub Pages</span>
        <span className="sm:hidden">GitHub</span>
      </button>

      {/* Modals */}
      <ModalConsultation
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialService={consultationService}
        initialNotes={consultationNotes}
      />

      <ModalCategoryDetail
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
        onRequestCategoryQuote={(title) => handleOpenConsultation(title)}
      />

      <ModalProjectDetail
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={(name) => handleOpenConsultation(name)}
      />

      <ModalVideoTour
        isOpen={isVideoTourOpen}
        onClose={() => setIsVideoTourOpen(false)}
        onOpenConsultation={() => handleOpenConsultation('Экскурсия на производство')}
      />

      <ModalPrivacy
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      <ModalGitHubPages
        isOpen={isGitHubPagesOpen}
        onClose={() => setIsGitHubPagesOpen(false)}
      />
    </div>
  );
}
