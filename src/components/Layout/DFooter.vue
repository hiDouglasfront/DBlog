<script setup>

</script>

<template>
    <footer class="h-64 bg-gray-900">
        <div class="container mx-auto h-full flex flex-col justify-center items-center px-4 md:px-0">
            <NuxtLink to="/">
                <LayoutLogo />
            </NuxtLink>

            <div class="flex items-center gap-8 mt-8">
                <NuxtLink to="https://github.com" target="blank">
                    <Icon name="mdi:github" size="32" class="cursor-pointer text-white hover:text-gray-400 transition duration-500" />
                </NuxtLink>

                <NuxtLink to="https://instagram.com" target="blank">
                    <Icon name="mdi-instagram" size="32" class="cursor-pointer text-white hover:text-gray-400 transition duration-500" />
                </NuxtLink>
            </div>

            <div class="mt-8">
                <p class="text-gray-400 text-center">
                    Copyright © 2023 @hidouglas.front | 
                    Todos os direitos reservados.
                </p>
            </div>
        </div>
    </footer>
</template>
