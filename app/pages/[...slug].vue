<script setup>
const slug = useRoute().params.slug

const availableLanguages = ['es']
const language = availableLanguages.includes(slug[0]) ? slug[0] : undefined

if (language) {
  slug.shift()
}

const { story } = await useAsyncStoryblok(
  slug && slug.length > 0 ? slug.join('/') : 'home',
  {
    api: {
      version: 'draft'
    }
  }
)
</script>

<template>
  <StoryblokComponent
    v-if="story"
    :blok="story.content"
  />
</template>
