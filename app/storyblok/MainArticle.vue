<script setup>
defineProps({ blok: Object })
</script>

<template>
  <main v-editable="blok">
    <h1>{{ blok.title }}</h1>
    <StoryblokRichText :doc="blok.content" />
  </main>
</template>
