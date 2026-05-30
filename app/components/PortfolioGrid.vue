<script setup lang="ts">
import { portfolio } from '~/data/site'
</script>
<template>
  <div class="portfolio-grid">
    <article v-for="item in portfolio" :key="item.title" class="portfolio-item reveal">
      <img :src="item.image" :alt="item.title" loading="lazy">
      <div>
        <p>{{ item.type }}</p>
        <h3>{{ item.title }}</h3>
      </div>
    </article>
  </div>
</template>
