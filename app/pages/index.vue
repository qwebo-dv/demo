<script setup lang="ts">
import { services } from '~/data/site'

useSeoMeta({
  title: 'Архитектура в природном материале',
  description: 'Премиальная студия ArchTerra: натуральный камень, художественная роспись, архитектурное освещение и ландшафт для частной архитектуры.',
  ogTitle: 'ArchTerra — архитектура в природном материале',
  ogDescription: 'Команда мастеров и авторский подход к камню, фрескам, свету и ландшафту.',
  ogUrl: 'https://archterra.ru/'
})
</script>

<template>
  <div>
    <HeroSection />

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
      <PortfolioGrid />
    </section>

    <CtaForm />
  </div>
</template>
