<script setup>

</script>

<template>
  <main class="h-screen bg-gray-900 text-gray-100">
    <section class="container mx-auto py-8 px-4 md:px-0">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 class="text-4xl font-bold mb-4">Olá, pode me chamar de Doug!</h1>
          <p class="text-xl text-gray-400">Sou desenvolvedor front-end apaixonado por criar experiências incríveis na web.</p>
        </div>

        <div class="flex flex-col items-center justify-center">
          <Icon name="mdi:book-open-variant" size="72" />
          <NuxtLink to="/blog" class="text-xl underline hover:opacity-80 transition duration-500">Clique aqui para ir para o Blog</NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>
