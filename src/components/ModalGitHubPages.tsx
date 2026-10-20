import React, { useState } from 'react';
import { X, Check, Copy, Github, Terminal, Rocket, Globe, Download, FolderArchive } from 'lucide-react';

interface ModalGitHubPagesProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalGitHubPages: React.FC<ModalGitHubPagesProps> = ({ isOpen, onClose }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const gitCommands = `git init
git add .
git commit -m "Deploy Aluprime website"
git branch -M main
git remote add origin https://github.com/ВАШ_ЛОГИН/ИМЯ_РЕПОЗИТОРИЯ.git
git push -u origin main`;

  const deployCommand = `npm run deploy`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-100 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-950">
                Макет и файлы для выкладки на GitHub Pages
              </h3>
              <p className="text-xs text-neutral-500">
                Конфигурация настроена: <code className="font-mono bg-neutral-100 px-1.5 py-0.5 rounded text-[11px]">base: './'</code> + автоматический GitHub Actions
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto space-y-5 pt-5 pr-1 text-xs sm:text-sm text-neutral-700">
          {/* Quick Direct Download of dist.zip */}
          <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 rounded-2xl p-4 sm:p-5 border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <FolderArchive className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-neutral-900 text-sm">
                    Скачать готовую папку dist (архив .zip)
                  </h4>
                  <span className="px-1.5 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold">
                    В 1 клик
                  </span>
                </div>
                <p className="text-xs text-neutral-600 mt-1">
                  В архиве лежит готовый автономный файл <code className="font-mono bg-white px-1 rounded border border-neutral-200">index.html</code> (все стили и скрипты уже вшиты внутрь, папка <code className="font-mono bg-white px-1 rounded border border-neutral-200">assets</code> больше не нужна!), а также вспомогательные <code className="font-mono bg-white px-1 rounded border border-neutral-200">404.html</code> и <code className="font-mono bg-white px-1 rounded border border-neutral-200">.nojekyll</code>. Достаточно перетащить их на GitHub!
                </p>
              </div>
            </div>
            <a
              href="./aluprime-site.zip"
              download="aluprime-site.zip"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all shadow-md hover:shadow-lg shrink-0 active:scale-95 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Скачать dist (174 КБ)</span>
            </a>
          </div>
          {/* Method 1 */}
          <div className="bg-neutral-50 rounded-2xl p-4 sm:p-5 border border-neutral-200/80">
            <div className="flex items-center justify-between mb-2">
              <span className="flex items-center gap-2 font-bold text-neutral-900">
                <Rocket className="w-4 h-4 text-emerald-600" />
                Способ 1: Автоматический (GitHub Actions — рекомендован)
              </span>
              <button
                onClick={() => handleCopy('git', gitCommands)}
                className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-white border border-neutral-300 hover:border-neutral-900 transition-colors text-neutral-800"
              >
                {copiedKey === 'git' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" /> Скопировано
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" /> Копировать команды
                  </>
                )}
              </button>
            </div>
            <p className="text-xs text-neutral-600 mb-3">
              В репозиторий уже добавлен workflow-файл <code className="font-mono bg-neutral-200/60 px-1 rounded">.github/workflows/deploy.yml</code>. При отправке кода в GitHub сайт собирается сам.
            </p>
            <pre className="bg-neutral-950 text-neutral-200 p-3 rounded-xl font-mono text-[11px] overflow-x-auto leading-relaxed">
              {gitCommands}
            </pre>
            <p className="text-[11px] text-neutral-500 mt-2">
              Затем в GitHub: <strong>Settings ➔ Pages ➔ Source: GitHub Actions</strong>.
            </p>
          </div>

          {/* Method 2 */}
          <div className="bg-neutral-50 rounded-2xl p-4 sm:p-5 border border-neutral-200/80">
            <div className="flex items-center justify-between mb-2">
              <span className="flex items-center gap-2 font-bold text-neutral-900">
                <Terminal className="w-4 h-4 text-blue-600" />
                Способ 2: Деплой одной командой
              </span>
              <button
                onClick={() => handleCopy('deploy', deployCommand)}
                className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-white border border-neutral-300 hover:border-neutral-900 transition-colors text-neutral-800"
              >
                {copiedKey === 'deploy' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" /> Скопировано
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" /> Копировать
                  </>
                )}
              </button>
            </div>
            <p className="text-xs text-neutral-600 mb-2">
              В проект встроен пакет <code className="font-mono bg-neutral-200/60 px-1 rounded">gh-pages</code>. Команда сама собирает <code className="font-mono">npm run build</code> и отправляет в ветку <code className="font-mono">gh-pages</code>:
            </p>
            <pre className="bg-neutral-950 text-emerald-400 p-3 rounded-xl font-mono text-[11px] overflow-x-auto">
              {deployCommand}
            </pre>
            <p className="text-[11px] text-neutral-500 mt-2">
              В GitHub: <strong>Settings ➔ Pages ➔ Source: Deploy from a branch (ветка gh-pages)</strong>.
            </p>
          </div>

          {/* Highlights */}
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900 space-y-1.5">
            <span className="font-bold block flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" /> Что уже подготовлено в файлах:
            </span>
            <ul className="list-disc list-inside space-y-1 text-[11px] text-amber-800">
              <li><code className="font-mono bg-amber-100 px-1 rounded">vite.config.ts</code>: настроен <code className="font-mono">base: './'</code> для относительных путей.</li>
              <li><code className="font-mono bg-amber-100 px-1 rounded">public/.nojekyll</code>: отключает обработку Jekyll на серверах GitHub.</li>
              <li><code className="font-mono bg-amber-100 px-1 rounded">public/404.html</code>: редирект для работы без ошибок при обновлении страниц.</li>
              <li><code className="font-mono bg-amber-100 px-1 rounded">README.md</code>: подробная пошаговая инструкция с описанием всех шагов.</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-neutral-100 mt-5 flex justify-end shrink-0">
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
