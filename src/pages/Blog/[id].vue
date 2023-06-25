<script setup>
const route = useRoute()
</script>

<template>
  <div class="h-screen bg-[#0C0C0D] text-gray-100">
    <section class="container mx-auto py-8 px-4 md:px-0">
      <h1>Nuxt Routing set up successfully!</h1>
      <p>Current route: {{ route.path }}</p>
      <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
    </section>
  </div>
</template>
