<script setup>
const pages = reactive([
    {
        name: "Inicio",
        path: "/"
    },
    {
        name: "Blog",
        path: "/blog"
    }
])
</script>

<template>
    <header class="h-20 bg-[#0C0C0D]">
        <nav class="container w-4/5 mx-auto my-0 h-full flex justify-between items-center">
            <NuxtLink to="/">
                <LayoutLogo />
            </NuxtLink>

            <ul class="flex items-center gap-8">
                <li v-for="(page, index) in pages" :key="index" class="text-lg text-white transition duration-1000 hover:border-b-2 border-green-600 hover:opacity-80">
                    <NuxtLink :to="page.path">
                        {{ page.name }}
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>