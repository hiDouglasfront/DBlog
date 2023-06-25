<script setup>
const keyframes = [{ transform: "translateX(-350px)" }, { transform: "translateX(0px)" }];
const el = ref();
useAnimate(el, keyframes, 2000);
</script>

<template>
  <main class="h-screen bg-[#0C0C0D] text-gray-100">
    <section class="container mx-auto py-8 px-4 md:px-0">
      <h1 class="text-2xl font-bold mb-4">Blog</h1>
      <div ref="el">
        <BlogCardArticle />
      </div>
    </section>
  </main>
</template>
