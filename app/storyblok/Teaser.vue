<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div
    v-editable="blok"
    class="py-16 text-5xl font-bold text-center teaser"
  >
    <h2>{{ blok.headline }}</h2>
  </div>
</template>
