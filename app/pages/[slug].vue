<script setup lang="ts">
import { services as fallbackServices } from '~/data/site'

const route = useRoute()
const { data: content } = await useFetch('/api/content', {
  default: () => ({ services: fallbackServices })
})
const services = computed(() => content.value.services?.length ? content.value.services : fallbackServices)
const service = computed(() => services.value.find(item => item.slug === route.params.slug))

if (!service.value) {
  throw createError({ statusCode: 404, statusMessage: 'Страница не найдена' })
}

useSeoMeta({
  title: () => service.value?.title || 'Услуга',
  description: () => service.value?.short || 'Услуги ArchTerra',
  ogTitle: () => `${service.value?.title} · ArchTerra`,
  ogDescription: () => service.value?.short || ''
})
</script>

<template>
  <div v-if="service" class="service-page">
    <section class="page-hero section-pad">
      <div class="page-hero-copy reveal">
        <p class="eyebrow">{{ service.eyebrow }}</p>
        <h1>{{ service.title }}</h1>
        <p>{{ service.short }}</p>
      </div>
      <img :src="service.image" :alt="service.title">
    </section>

    <section class="story section-pad">
      <article class="reveal">
        <p class="eyebrow">История мастера</p>
        <h2>{{ service.master }}</h2>
        <p>{{ service.story }}</p>
      </article>
      <article class="reveal">
        <p class="eyebrow">Философия</p>
        <h2>Авторский подход</h2>
        <p>{{ service.philosophy }}</p>
      </article>
    </section>

    <section class="section-pad split-list">
      <div>
        <p class="eyebrow">Услуги</p>
        <h2>Что входит в направление</h2>
      </div>
      <ul>
        <li v-for="item in service.services" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="section-pad gallery-section">
      <div class="section-title centered">
        <p class="eyebrow">Галерея</p>
        <h2>Фрагменты проектов и процесса</h2>
      </div>
      <div class="mini-gallery">
        <figure v-for="(item, index) in service.gallery" :key="item" class="reveal">
          <img :src="`/images/${service.slug}-${(index % 4) + 1}.svg`" :alt="item" loading="lazy">
          <figcaption>{{ item }}</figcaption>
        </figure>
      </div>
    </section>

    <section class="section-pad process">
      <p class="eyebrow">Этапы работы</p>
      <div class="process-grid">
        <article v-for="(item, index) in service.process" :key="item" class="reveal">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <h3>{{ item }}</h3>
        </article>
      </div>
    </section>

    <CtaForm />
  </div>
</template>
