<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div
    v-editable="blok"
    class="container mx-auto grid grid-cols-3 gap-12 place-items-centers py-16"
  >
    <StoryblokComponent
      v-for="currentBlok in blok.columns"
      :key="currentBlok._uid"
      :blok="currentBlok"
    />
  </div>
</template>
