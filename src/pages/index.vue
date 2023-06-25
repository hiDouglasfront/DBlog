<script setup>

</script>

<template>
  <main class="h-screen bg-[#0C0C0D] text-gray-100">
    <section class="container h-full mx-auto py-8 px-4 md:px-0">
      <div class="h-full flex justify-center items-center md:justify-around flex-col md:flex-row gap-16">
        <div class="md:w-6/12">
          <h1 class="text-4xl text-center md:text-left font-bold mb-4">Olá, pode me chamar de Doug!</h1>
          <p class="text-xl text-center md:text-left text-gray-400">Sou desenvolvedor front-end apaixonado por criar experiências incríveis na web.</p>
        </div>

        <NuxtLink to="/blog" class="text-xl w-[178px] h-[40px] p-3 rounded-md bg-[#121213] cursor-pointer flex items-center justify-center gap-3 border border-green-600 hover:border-green-300 transition duration-500">
          <Icon name="mdi:book-open-variant" size="24" />
            Blog
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
