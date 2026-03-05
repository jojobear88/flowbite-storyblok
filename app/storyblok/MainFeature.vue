<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div
    v-editable="blok"
    class="feature"
  >
    <span>{{ blok.name }}</span>
  </div>
</template>
