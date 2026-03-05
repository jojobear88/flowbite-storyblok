<script setup>
import Home from './Home.vue';
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