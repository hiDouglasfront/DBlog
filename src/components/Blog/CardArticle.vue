<script setup>
const articles = reactive([
    {
        id: 1,
        title: "Article 1",
        author: "John Doe",
        date: "2023-05-22",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum dictum lorem eu fringilla."
    },
    {
        id: 2,
        title: "Article 2",
        author: "Jane Smith",
        date: "2023-05-23",
        summary: "Fusce ullamcorper placerat felis sed tristique. Vestibulum auctor tellus in ligula tincidunt tempor."
    },
    {
        id: 3,
        title: "Article 3",
        author: "David Johnson",
        date: "2023-05-24",
        summary: "Praesent sit amet justo in sem rhoncus facilisis sed ac erat. Proin luctus varius felis, et efficitur enim vestibulum sit amet."
    }
]);

function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
}
</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="article in articles" :key="article.id" class="bg-white shadow-md rounded-lg p-4">
            <h2 class="text-lg font-bold mb-2">{{ article.title }}</h2>
            <p class="text-gray-600 mb-2">By {{ article.author }}</p>
            <p class="text-gray-600 mb-2">{{ formatDate(article.date) }}</p>
            <p class="text-gray-800">{{ article.summary }}</p>
        </div>
    </div>
</template>