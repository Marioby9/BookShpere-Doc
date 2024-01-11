<template>
  <Header/>
  <RouterView/>
  <Footer />
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router'
import { useRouter } from 'vue-router';

const router = useRouter()
router.push({ path: '/about' })

</script>

<style scoped>

</style>
