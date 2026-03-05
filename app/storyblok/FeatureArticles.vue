<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok">
    <h2>Featured Articles</h2>
    <article
      v-for="article in blok.articles"
      :key="article.uuid"
    >
      <NuxtLink :href="article.full_slug">{{ article.content.title }}</NuxtLink>
    </article>
  </section>
</template>
