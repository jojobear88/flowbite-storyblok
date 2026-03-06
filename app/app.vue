<script setup>
import Home from '/storyblok/Home.vue';
</script>

<template>
  <main>
    <Suspense>
      <template #default>
        <Home />
      </template>
    </Suspense>
  </main>
</template>