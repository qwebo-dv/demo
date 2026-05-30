export default defineNuxtConfig({
  compatibilityDate: '2026-05-30',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    strapiUrl: process.env.STRAPI_URL || '',
    strapiApiToken: process.env.STRAPI_API_TOKEN || '',
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://archterra.ru'
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      titleTemplate: '%s · ArchTerra',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#f4eee4' },
        { name: 'description', content: 'ArchTerra — архитектура в природном материале: натуральный камень, художественная роспись, ландшафт и архитектурное освещение.' },
        { property: 'og:site_name', content: 'ArchTerra' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://archterra.ru/og.svg' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap' }
      ]
    }
  },
  nitro: {
    prerender: {
      routes: ['/', '/stone', '/painting', '/light', '/landscape', '/about', '/portfolio', '/contacts', '/admin']
    }
  },
  routeRules: {
    '/': { prerender: true },
    '/**': { prerender: true }
  }
})
