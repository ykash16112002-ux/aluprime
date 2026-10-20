# ALUPRIME — Архитектурное и панорамное остекление

Современный многостраничный веб-сайт премиального архитектурного остекления, панорамных порталов и витрин.

---

## 🚀 Быстрый старт локально

```bash
# 1. Установка зависимостей
npm install

# 2. Запуск локального сервера разработки
npm run dev

# 3. Сборка продакшен-версии
npm run build
```

---

## 🌐 Публикация на GitHub Pages

Проект уже полностью настроен для выкладки на **GitHub Pages** (в `vite.config.ts` настроен относительный базовый путь `base: './'`, подготовлен файл `public/.nojekyll` и страница `public/404.html`).

Выберите один из двух удобных способов публикации:

### Способ 1: Автоматический деплой через GitHub Actions (Рекомендуется)

1. Создайте новый репозиторий на [GitHub](https://github.com/new).
2. Загрузите файлы проекта в ветку `main`:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Aluprime site"
   git branch -M main
   git remote add origin https://github.com/<ваш-логин>/<имя-репозитория>.git
   git push -u origin main
   ```
3. Откройте в вашем репозитории на GitHub:
   - Вкладку **Settings** ➔ раздел **Pages** (в левом меню).
   - В блоке **Build and deployment** ➔ **Source** выберите **GitHub Actions**.
4. Готово! Файл `.github/workflows/deploy.yml` автоматически соберет проект и развернет его. Ссылка на сайт появится прямо на вкладке Pages (например, `https://<ваш-логин>.github.io/<имя-репозитория>/`).

---

### Способ 2: Быстрый деплой одной командой (`npm run deploy`)

Если вы хотите развернуть сайт напрямую через ветку `gh-pages`:

1. Убедитесь, что ваш удаленный репозиторий привязан:
   ```bash
   git remote add origin https://github.com/<ваш-логин>/<имя-репозитория>.git
   ```
2. Запустите команду:
   ```bash
   npm run deploy
   ```
   *Она автоматически выполнит сборку `npm run build` и отправит папку `dist` в ветку `gh-pages` на GitHub.*
3. В настройках репозитория **Settings ➔ Pages**:
   - **Source**: `Deploy from a branch`
   - **Branch**: выберите `gh-pages` / `/ (root)` и нажмите **Save**.

---

### Способ 3: Ручная загрузка папки `dist`

1. Запустите сборку:
   ```bash
   npm run build
   ```
2. Содержимое папки `dist/` можно перетащить в репозиторий GitHub с веткой `gh-pages` или залить на любой статический хостинг (GitHub Pages, Netlify, Vercel, Timeweb).
