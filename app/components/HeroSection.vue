<script setup lang="ts">
defineProps<{ title?: string, subtitle?: string }>()
</script>

<template>
  <section class="hero">
    <div class="hero-art" role="img" aria-label="Архитектурная терраса, природный камень, пейзаж и фреска"></div>
    <div class="hero-copy reveal">
      <p>{{ subtitle || 'Москва · Эстетика природы и пространства' }}</p>
      <h1>{{ title || 'Природный камень\nи архитектура без времени' }}</h1>
      <NuxtLink class="btn dark" to="/contacts">Обсудить проект</NuxtLink>
    </div>
  </section>
</template>
