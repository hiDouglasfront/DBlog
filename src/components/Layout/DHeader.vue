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
    <header class="h-20 bg-gray-900">
        <nav class="container mx-auto h-full flex justify-between items-center">
            <NuxtLink to="/">
                <LayoutLogo />
            </NuxtLink>

            <ul class="flex items-center gap-8">
                <li v-for="(page, index) in pages" :key="index" class="text-lg text-white hover:opacity-80 transition duration-500">
                    <NuxtLink :to="page.path">
                        {{ page.name }}
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>