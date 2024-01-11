<template>
    <header class="flex items-center w-full">
            <div class="w-2/4">
                <img src="@/assets/img/logos/fullWhiteLogo.png" alt="logo" class="w-3/4">
                <h1>Documentation Page</h1>
            </div>
            <div class="w-2/4">
                <nav>
                    <ul class="flex gap-7">
                        <RouterLink v-for="elm in menu" :to="elm.path" class="cursor-pointer hover:text-orange" :style="{color: route.path == elm.path ? '#FF6600' : 'white' }">
                            {{ elm.name }}
                        </RouterLink>
                    </ul>
                </nav>
            </div>
            <div class="w-1/4 flex justify-center text-2xl text-lightOrange gap-7">
                <a href="https://github.com/Marioby9/BookSphere" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github cursor-pointer hover:text-orange"></i></a>
                <a href="https://bookspheredev.000webhostapp.com/" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-globe cursor-pointer hover:text-orange"></i></a>
            </div>
    </header>
</template>

<script setup>
    import { RouterLink, useRoute } from 'vue-router'

    const route = useRoute()

    const menu = [
        { path: "/about", name: "About" },
        { path: "/installation", name: "Installation" },
        { path: "/deployment", name: "Deployment" },
        { path: "/documentation", name: "Documentation" },
        { path: "/blog", name: "Blog" },
    ]
</script>

<style scoped>
</style>