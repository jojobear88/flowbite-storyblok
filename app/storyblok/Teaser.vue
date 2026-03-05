<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div
    v-editable="blok"
    class="teaser"
  >
    <h2>{{ blok.headline }}</h2>
  </div>
</template>
