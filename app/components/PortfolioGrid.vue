<script setup lang="ts">
import { portfolio as fallbackPortfolio } from '~/data/site'

defineProps<{ items?: typeof fallbackPortfolio }>()
</script>
<template>
  <div class="portfolio-grid">
    <article v-for="item in (items || fallbackPortfolio)" :key="item.title" class="portfolio-item reveal">
      <img :src="item.image" :alt="item.title" loading="lazy">
      <div>
        <p>{{ item.type }}</p>
        <h3>{{ item.title }}</h3>
      </div>
    </article>
  </div>
</template>
