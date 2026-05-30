<script setup lang="ts">
const items = ref([
  { title: 'Главный экран', status: 'готов к публикации', hint: 'Замените hero-изображение и лид-абзац' },
  { title: 'Направления', status: '4 раздела', hint: 'Редактируйте тексты услуг и этапы работ' },
  { title: 'Портфолио', status: '6 проектов', hint: 'Добавляйте кейсы, фото и описания' }
])

useSeoMeta({ title: 'Админ-панель', description: 'Демо-панель управления контентом сайта ArchTerra.' })
</script>
<template>
  <section class="admin section-pad">
    <p class="eyebrow">Content studio</p>
    <h1>Админ-панель ArchTerra</h1>
    <p>Демо-интерфейс показывает структуру контента для менеджера. Для продакшена его можно подключить к Nuxt Content, Directus, Strapi или другой headless CMS.</p>
    <div class="admin-grid">
      <article v-for="item in items" :key="item.title">
        <span>{{ item.status }}</span>
        <h2>{{ item.title }}</h2>
        <p>{{ item.hint }}</p>
        <button class="btn ghost" type="button">Редактировать</button>
      </article>
    </div>
  </section>
</template>
