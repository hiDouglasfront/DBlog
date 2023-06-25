// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: "D Blog",
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            meta: [
                { name: "description", content: "Blog sobre programação." },
            ],
            link: [
                { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
				{ rel: "preconnect", href: "https://fonts.gstatic.com" },
                { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600&display=swap"}
            ],
        },
        pageTransition: {
            name: "page",
            mode: "out-in"
        },
    },

    srcDir: "src/",
    css: [
        "/assets/css/style.css",
    ],

    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxt/devtools",
        "@vueuse/nuxt",
        "@pinia/nuxt",
        "nuxt-icon",
    ],

    tailwindcss: {
        cssPath: "/assets/css/style.css",
        configPath: "tailwind.config.js",
    },

    devtools: {
        enabled: true,
    },
})
