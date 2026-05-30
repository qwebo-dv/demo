<script setup lang="ts">
const adminItems = [
  { title: 'Главный экран', status: 'Site settings', hint: 'Бренд, юридическое название, слоган, SEO-описание и hero-текст редактируются в single type Site settings.' },
  { title: 'Направления', status: 'Collection: services', hint: 'Страницы камня, росписи, света и ландшафта управляются в коллекции Services.' },
  { title: 'Портфолио', status: 'Collection: portfolio items', hint: 'Кейсы, изображения, категории и порядок вывода хранятся в Portfolio items.' }
]

useSeoMeta({ title: 'Админ-панель Strapi', description: 'Strapi CMS для управления контентом сайта ArchTerra.' })
</script>
<template>
  <section class="admin section-pad">
    <p class="eyebrow">Strapi CMS</p>
    <h1>Админ-панель ArchTerra работает через Strapi</h1>
    <p>Запустите CMS командой <code>npm run cms:dev</code>, создайте администратора на <code>http://localhost:1337/admin</code> и выдайте public или API-token доступ к published контенту для Nuxt.</p>
    <div class="admin-grid">
      <article v-for="item in adminItems" :key="item.title">
        <span>{{ item.status }}</span>
        <h2>{{ item.title }}</h2>
        <p>{{ item.hint }}</p>
        <a class="btn ghost" href="http://localhost:1337/admin" target="_blank" rel="noreferrer">Открыть Strapi</a>
      </article>
    </div>
  </section>
</template>
