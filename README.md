# ArchTerra Nuxt + Strapi

Премиальный сайт ArchTerra на Nuxt с headless CMS Strapi для управления контентом.

## Запуск сайта

```bash
npm install
npm run dev
```

По умолчанию Nuxt использует встроенный fallback-контент из `app/data/site.ts`, поэтому сайт можно открыть даже без запущенной CMS.

## Запуск админ-панели Strapi

```bash
cp .env.example .env
npm install
npm --prefix cms install
npm run cms:dev
```

Админ-панель будет доступна на `http://localhost:1337/admin`.

## Контент-модель Strapi

- `Site settings` — single type для бренда, юридического названия, домена, слогана, SEO-описания и текста первого экрана.
- `Services` — collection type для страниц направлений: камень, художественная роспись, архитектурный свет, ландшафт.
- `Portfolio items` — collection type для карточек портфолио.

Nuxt читает Strapi через серверный endpoint `/api/content`. Если `STRAPI_URL` не задан или Strapi недоступен, endpoint возвращает fallback-контент, чтобы сайт продолжал собираться и работать.

## Переменные окружения

Основные переменные описаны в `.env.example`:

- `STRAPI_URL` — адрес Strapi, например `http://localhost:1337`.
- `STRAPI_API_TOKEN` — optional read-only API token для published content.
- `NUXT_PUBLIC_SITE_URL` — публичный домен сайта.
