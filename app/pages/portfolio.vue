<script setup lang="ts">
import { portfolio as fallbackPortfolio } from '~/data/site'

const { data: content } = await useFetch('/api/content', { default: () => ({ portfolio: fallbackPortfolio }) })
const items = computed(() => content.value.portfolio?.length ? content.value.portfolio : fallbackPortfolio)

useSeoMeta({ title: 'Портфолио', description: 'Портфолио ArchTerra: природный камень, художественная роспись, архитектурный свет и ландшафт.' })
</script>
<template>
  <div>
    <section class="page-heading section-pad reveal">
      <p class="eyebrow">Портфолио</p>
      <h1>Избранные проекты ArchTerra</h1>
      <p>Галерея демонстрирует атмосферу направлений. Реальные кейсы можно наполнять через админ-панель или подключить headless CMS.</p>
    </section>
    <section class="section-pad"><PortfolioGrid :items="items" /></section>
    <CtaForm />
  </div>
</template>
