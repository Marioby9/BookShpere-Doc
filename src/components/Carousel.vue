<template>
    <div id="default-carousel" class="mt-5 w-full relative border-solid border-orange border-4 rounded-lg" data-carousel="slide">
      <!-- Carousel wrapper -->
      <div class="relative overflow-hidden rounded-lg h-56 md:h-96">
        <div v-for="(slide, index) in props.slides" :key="index" :class="{ 'duration-700': true, 'ease-in-out': true, 'slide': true, 'active': index === currentSlide }">
          <img :src="slide.src" class="absolute block w-auto h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" :alt="slide.alt">
        </div>
      </div>
      <!-- Slider controls -->
      <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none bPrev" @click="prevSlide">
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none bNext" @click="nextSlide">
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
</template>

<script setup>

    import { ref } from 'vue';
    const props = defineProps({
        slides: Array,
    })
    const currentSlide = ref(0)
    const showSlide = (index) => {
      currentSlide.value = index
    }
    const nextSlide = () => {
      currentSlide.value = (currentSlide.value + 1) % props.slides.length
    }
    const prevSlide = () => {
      currentSlide.value = currentSlide.value > 0 ? currentSlide.value - 1 : props.slides.length - 1
    }
</script>

<style scoped>
    .slide{
        display: none;
    }
    .slide.active{
        display: block;
    }
</style>