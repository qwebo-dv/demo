<script setup lang="ts">
useSeoMeta({ title: 'Портфолио', description: 'Портфолио ArchTerra: природный камень, художественная роспись, архитектурный свет и ландшафт.' })
</script>
<template>
  <div>
    <section class="page-heading section-pad reveal">
      <p class="eyebrow">Портфолио</p>
      <h1>Избранные проекты ArchTerra</h1>
      <p>Галерея демонстрирует атмосферу направлений. Реальные кейсы можно наполнять через админ-панель или подключить headless CMS.</p>
    </section>
    <section class="section-pad"><PortfolioGrid /></section>
    <CtaForm />
  </div>
</template>
