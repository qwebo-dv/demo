<script setup lang="ts">
import { services as fallbackServices, siteSettings } from '~/data/site'

const { data: content } = await useFetch('/api/content', {
  default: () => ({ settings: siteSettings, services: fallbackServices, portfolio: [] })
})

const settings = computed(() => content.value.settings || siteSettings)
const services = computed(() => content.value.services?.length ? content.value.services : fallbackServices)
const portfolioItems = computed(() => content.value.portfolio || [])

useSeoMeta({
  title: () => settings.value.slogan,
  description: () => settings.value.description,
  ogTitle: () => `${settings.value.brand} — ${settings.value.slogan}`,
  ogDescription: 'Команда мастеров и авторский подход к камню, фрескам, свету и ландшафту.',
  ogUrl: () => settings.value.domain
})
</script>

<template>
  <div>
    <HeroSection :title="settings.heroTitle" :subtitle="settings.heroSubtitle" />

    <section class="intro section-pad reveal">
      <p class="eyebrow">Философия</p>
      <h2>ArchTerra создаёт не набор услуг, а целостную среду — с уважением к материалу, ремеслу и человеку.</h2>
      <p>Мы объединяем мастеров камня, художников, ландшафтных архитекторов и светодизайнеров, чтобы дом, двор и интерьер звучали как единая архитектурная композиция.</p>
    </section>

    <section class="masters section-pad">
      <div class="section-title">
        <p class="eyebrow">Команда</p>
        <h2>Мастера ArchTerra</h2>
      </div>
      <div class="masters-grid">
        <article v-for="service in services" :key="service.slug" class="master-card reveal">
          <span>{{ service.eyebrow }}</span>
          <h3>{{ service.master }}</h3>
          <p>{{ service.story }}</p>
        </article>
      </div>
    </section>

    <section class="directions section-pad">
      <div class="section-title centered">
        <p class="eyebrow">Направления</p>
        <h2>Материалы, свет и сад в одной эстетике</h2>
      </div>
      <div class="service-grid">
        <ServiceCard v-for="service in services" :key="service.slug" :service="service" />
      </div>
    </section>

    <section class="portfolio section-pad">
      <div class="section-title">
        <p class="eyebrow">Портфолио</p>
        <h2>Проекты с атмосферой ручной работы</h2>
      </div>
      <PortfolioGrid :items="portfolioItems" />
    </section>

    <CtaForm />
  </div>
</template>
