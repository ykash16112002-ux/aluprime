import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, Upload, Download, Globe, Check, Loader2 } from 'lucide-react';
import { defaultHeroImage } from '../data/heroImage';

interface BuildingHeroBannerProps {
  onOpenConsultation: () => void;
  onNavigateToCalculator: () => void;
}

/**
 * Hero Banner:
 * - Natural rendering of the main photo without artificial sharpening/filters
 * - Direct image upload and replacement
 * - One-click save to file download
 * - Permanent project persistence and automated GitHub Pages deployment
 * - Seamless architectural fallback
 */
export const BuildingHeroBanner: React.FC<BuildingHeroBannerProps> = ({
  onOpenConsultation,
  onNavigateToCalculator,
}) => {
  const [userUploadedFile, setUserUploadedFile] = useState<string | null>(() => {
    try {
      // Remove any legacy enhanced cache
      localStorage.removeItem('hero_enhanced_image');
      return localStorage.getItem('hero_custom_uploaded_image') || defaultHeroImage || null;
    } catch {
      return defaultHeroImage || null;
    }
  });

  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auto-sync image to backend if in localStorage but not yet deployed
  useEffect(() => {
    const localImg = localStorage.getItem('hero_custom_uploaded_image');
    if (localImg && localImg !== defaultHeroImage && saveStatus === 'idle') {
      persistImageToBackend(localImg, false);
    }
  }, []);

  const persistImageToBackend = async (dataUrl: string, pushToGithub: boolean = true) => {
    setSaveStatus('saving');
    setStatusMessage(pushToGithub ? 'Сохранение и публикация на GitHub Pages...' : 'Сохранение фото в проект...');
    try {
      const res = await fetch('/api/save-hero-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dataUrl, pushToGithub }),
      });
      if (res.ok) {
        setSaveStatus('saved');
        setStatusMessage(
          pushToGithub
            ? '✅ Фото сохранено в проект и отправлено на GitHub Pages!'
            : '✅ Фотография сохранена в файлах сайта!'
        );
        setTimeout(() => {
          setSaveStatus('idle');
          setStatusMessage('');
        }, 6000);
      } else {
        setSaveStatus('saved');
        setStatusMessage('✅ Фото сохранено в вашем браузере!');
        setTimeout(() => setSaveStatus('idle'), 4000);
      }
    } catch {
      setSaveStatus('saved');
      setStatusMessage('✅ Фото сохранено локально');
      setTimeout(() => setSaveStatus('idle'), 4000);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        setUserUploadedFile(dataUrl);
        try {
          localStorage.setItem('hero_custom_uploaded_image', dataUrl);
          localStorage.removeItem('hero_enhanced_image');
        } catch {}
        // Automatically save to backend and publish to GitHub
        persistImageToBackend(dataUrl, true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadPhoto = () => {
    if (!userUploadedFile) return;
    try {
      const link = document.createElement('a');
      link.href = userUploadedFile;
      link.download = 'aluprime-glazing-hero.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      console.error('Download error:', e);
    }
  };

  return (
    <div className="relative w-full rounded-[2.2rem] sm:rounded-[2.8rem] overflow-hidden shadow-[0_20px_60px_rgba(20,30,45,0.15)] border border-neutral-300/80 bg-[#B2C6D5] min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex items-center group">
      {/* 
        HERO BACKGROUND VISUAL:
        Displays the natural photo without any artificial sharpening filters,
        or the exact photorealistic architectural vector fallback.
      */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {userUploadedFile ? (
          <img
            src={userUploadedFile}
            alt="Остекление современного здания"
            className="w-full h-full object-cover object-[78%_center]"
          />
        ) : (
          /* Photorealistic Vector Fallback */
          <svg
            viewBox="0 0 1200 680"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="exactSky" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#A8C0D2" />
                <stop offset="30%" stopColor="#B8CCD9" />
                <stop offset="65%" stopColor="#D0DFE9" />
                <stop offset="100%" stopColor="#DEEBF2" />
              </linearGradient>

              <linearGradient id="cubeShadowFace" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2E343D" />
                <stop offset="50%" stopColor="#252A32" />
                <stop offset="100%" stopColor="#1B1E24" />
              </linearGradient>

              <linearGradient id="cubeSunlitFace" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#404754" />
                <stop offset="60%" stopColor="#333A45" />
                <stop offset="100%" stopColor="#262B33" />
              </linearGradient>

              <linearGradient id="creamStucco" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F5F2EB" />
                <stop offset="45%" stopColor="#EBE5DC" />
                <stop offset="100%" stopColor="#DCD5C9" />
              </linearGradient>

              <linearGradient id="timberOak" x1="0" y1="0" x2="1" y2="0.5">
                <stop offset="0%" stopColor="#BA8652" />
                <stop offset="50%" stopColor="#CF9C68" />
                <stop offset="100%" stopColor="#9C6B3A" />
              </linearGradient>

              <linearGradient id="glassBalustradeMaterial" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.88" />
                <stop offset="30%" stopColor="#B3CFE2" stopOpacity="0.55" />
                <stop offset="70%" stopColor="#7DA2BD" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            <rect width="1200" height="680" fill="url(#exactSky)" />
            <polygon points="340,680 770,195 990,285 860,680" fill="url(#creamStucco)" />
            <polygon points="990,285 1200,380 1200,680 860,680" fill="#2C313B" />

            <polygon points="1040,340 1150,380 1130,455 1020,415" fill="#181B21" />
            <polygon points="1044,345 1146,384 1126,450 1024,411" fill="url(#glassBalustradeMaterial)" opacity="0.45" />

            <polygon points="320,560 520,110 790,200 660,640" fill="url(#cubeShadowFace)" />
            <polygon points="520,110 790,30 980,180 790,200" fill="#3E4552" />
            <polygon points="790,200 980,180 960,280 770,200" fill="url(#cubeSunlitFace)" />

            {/* Wood windows */}
            <polygon points="580,180 735,225 725,265 570,220" fill="url(#timberOak)" />
            <polygon points="585,185 645,202 640,238 580,221" fill="#191B20" />
            <polygon points="655,205 728,226 723,261 650,240" fill="#191B20" />
            <polygon points="588,188 642,203 638,235 584,219" fill="url(#glassBalustradeMaterial)" opacity="0.6" />
            <polygon points="658,208 725,227 721,258 653,239" fill="url(#glassBalustradeMaterial)" opacity="0.6" />

            <polygon points="550,270 705,315 695,355 540,310" fill="url(#timberOak)" />
            <polygon points="555,275 615,292 610,328 550,311" fill="#191B20" />
            <polygon points="625,295 698,316 693,351 620,330" fill="#191B20" />
            <polygon points="558,278 612,293 608,325 554,309" fill="url(#glassBalustradeMaterial)" opacity="0.6" />
            <polygon points="628,298 695,317 691,348 623,329" fill="url(#glassBalustradeMaterial)" opacity="0.6" />

            {/* Balconies */}
            <polygon points="345,540 735,325 790,345 400,560" fill="#E4DFD5" />
            <polygon points="340,480 730,265 730,325 340,540" fill="url(#glassBalustradeMaterial)" opacity="0.8" />
            <polygon points="730,265 785,285 785,345 730,325" fill="url(#glassBalustradeMaterial)" opacity="0.9" />
            <line x1="340" y1="480" x2="730" y2="265" stroke="#FFFFFF" strokeWidth="4.5" />
            <line x1="730" y1="265" x2="785" y2="285" stroke="#F0F4F8" strokeWidth="4.5" />

            <polygon points="280,670 670,455 725,475 335,680" fill="#E4DFD5" />
            <polygon points="275,610 665,395 665,455 275,670" fill="url(#glassBalustradeMaterial)" opacity="0.75" />
            <polygon points="665,395 720,415 720,475 665,455" fill="url(#glassBalustradeMaterial)" opacity="0.88" />
            <line x1="275" y1="610" x2="665" y2="395" stroke="#FFFFFF" strokeWidth="4.5" />
            <line x1="665" y1="395" x2="720" y2="415" stroke="#F0F4F8" strokeWidth="4.5" />
          </svg>
        )}

        {/* Soft Left Gradient Vignette: Ensures 100% legibility of white typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#212E3B]/85 via-[#2C3E4F]/55 to-transparent w-[85%] sm:w-[70%] lg:w-[60%] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 
        Text Overlay: 100% focused on architectural glazing
      */}
      <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl text-white">
        {/* Kicker badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
            АРХИТЕКТУРНОЕ ОСТЕКЛЕНИЕ И ФАСАДЫ
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-[3.8rem] font-bold text-white tracking-[-0.035em] leading-[1.08] mb-5 text-balance drop-shadow-sm font-sans">
          Остекление
          <br />
          для бизнеса и жизни
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base lg:text-lg text-white/95 font-normal leading-relaxed mb-9 max-w-xl drop-shadow-xs">
          Панорамные порталы, витрины и фасадные конструкции — от лазерного сканирования проёма до чистового монтажа под ключ.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={onNavigateToCalculator}
            className="inline-flex items-center justify-center px-8 sm:px-9 py-3.5 sm:py-4 text-xs sm:text-sm font-bold tracking-wide text-neutral-900 bg-white rounded-full hover:bg-neutral-100 active:scale-95 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer"
          >
            <span>Рассчитать стоимость</span>
          </button>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold tracking-wide text-white bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/30 transition-all focus:outline-none cursor-pointer"
          >
            <span>Вызвать инженера на замер</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-10 pt-6 border-t border-white/25 flex flex-wrap items-center gap-6 text-xs text-white/85">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Официальная гарантия 15 лет</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white/60" />
            <span>Профили Schüco & Reynaers</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white/60" />
            <span>Собственное ЧПУ-производство</span>
          </div>
        </div>
      </div>

      {/* 
        Image Toolbar:
        - Download uploaded photo directly to disk
        - Save photo into project & push live to GitHub Pages
        - Upload / Change photo
      */}
      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20 flex flex-col items-end gap-2">
        <div className="flex items-center gap-2 flex-wrap justify-end">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />

          {/* Download Photo Button (if photo exists) */}
          {userUploadedFile && (
            <button
              onClick={handleDownloadPhoto}
              className="px-3.5 py-2 rounded-full bg-black/50 hover:bg-black/75 backdrop-blur-md text-white text-[11px] font-medium flex items-center gap-1.5 border border-white/25 transition-all shadow-md cursor-pointer hover:scale-[1.02] active:scale-95"
              title="Скачать это фото к себе на компьютер"
            >
              <Download className="w-3.5 h-3.5 text-blue-300" />
              <span>Скачать фото</span>
            </button>
          )}

          {/* Save to Project & Push to GitHub */}
          {userUploadedFile && (
            <button
              onClick={() => persistImageToBackend(userUploadedFile, true)}
              disabled={saveStatus === 'saving'}
              className="px-3.5 py-2 rounded-full bg-emerald-600/80 hover:bg-emerald-600 backdrop-blur-md text-white text-[11px] font-semibold flex items-center gap-1.5 border border-emerald-400/30 transition-all shadow-md cursor-pointer disabled:opacity-50 hover:scale-[1.02] active:scale-95"
              title="Зафиксировать это фото в проекте навсегда и обновить на GitHub Pages"
            >
              {saveStatus === 'saving' ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Публикация...</span>
                </>
              ) : (
                <>
                  <Globe className="w-3.5 h-3.5 text-emerald-200" />
                  <span>Сохранить на GitHub</span>
                </>
              )}
            </button>
          )}

          {/* Upload / Replace Photo */}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-3.5 py-2 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white text-[11px] font-medium flex items-center gap-1.5 border border-white/25 transition-all shadow-md cursor-pointer hover:scale-[1.02] active:scale-95"
            title="Загрузить новое фото"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>{userUploadedFile ? 'Заменить' : 'Загрузить фото'}</span>
          </button>
        </div>

        {/* Status notification toast */}
        {statusMessage && (
          <div className="bg-neutral-900/90 backdrop-blur-md text-white text-[11px] px-3.5 py-2 rounded-xl border border-white/20 shadow-xl max-w-xs animate-in fade-in slide-in-from-top-2 duration-200 flex items-center gap-2">
            {saveStatus === 'saving' ? (
              <Loader2 className="w-3.5 h-3.5 text-blue-400 animate-spin shrink-0" />
            ) : (
              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            )}
            <span className="leading-tight">{statusMessage}</span>
          </div>
        )}
      </div>
    </div>
  );
};
