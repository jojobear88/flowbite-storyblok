<script setup>
const storyblokApi = useStoryblokApi()
const articles = await storyblokApi.getAll('cdn/stories', {
  api: {
    version: 'draft',
    starts_with: 'articles',
    content_type: 'article'
  }
})
</script>

<template>
  <main>
    <h1>Article Overview</h1>
    <article
      v-for="article in articles"
      :key="article.uuid"
    >
      <NuxtLink :href="article.full_slug">{{ article.content.title }}</NuxtLink>
    </article>
  </main>
</template>
