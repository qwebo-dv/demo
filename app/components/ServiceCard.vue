<script setup lang="ts">
defineProps<{ service: { slug: string, title: string, short: string, image: string, eyebrow: string } }>()
</script>

<template>
  <NuxtLink class="service-card reveal" :to="`/${service.slug}`">
    <img :src="service.image" :alt="service.title" loading="lazy">
    <span>{{ service.eyebrow }}</span>
    <h3>{{ service.title }}</h3>
    <p>{{ service.short }}</p>
  </NuxtLink>
</template>
