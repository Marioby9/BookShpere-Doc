<template>
            <section id="about" class="flex flex-col gap-5">
            <h1 class="text-4xl">What is BookSphere?</h1>
            <p>Welcome to BookSphere, your new online library experience. This project is a web application designed to connect book lovers with a vast collection of books. Both patrons and administrators will enjoy a seamless and easy-to-manage literary journey.</p>
            <p>The application offers various classifications for the books according to their popularity among the clients in the library or also according to their date of release. Looking for something new? BookSphere offers personalised recommendations and the option to browse the "Most Popular Books", providing variety and surprises for avid readers.</p>
            <p>What makes us unique: BookSphere is more than just an online library. We constantly seek to innovate with unique features that enhance the reading experience, keeping our users engaged and committed to reading. With BookSphere, we are building a virtual haven where the pages of books come to life. Welcome to a world of limitless stories, all at your fingertips - immerse yourself in the essence of BookSphere and let the literary adventure begin!</p>
            
            <Carousel :slides="userImages"/>
        </section>
</template>

<script setup>
    import Carousel from '@/components/Carousel.vue'

    import homeImage from '@/assets/img/screenshots/home.jpg';
    import catalogueImage from '@/assets/img/screenshots/catalogue.jpg';
    import userBooksImage from '@/assets/img/screenshots/userBooks.jpg';
    import profileImage from '@/assets/img/screenshots/profile.jpg';

    //

    const userImages = [
    { src: homeImage, alt: 'home' },
    { src: catalogueImage, alt: 'catalogue' },
    { src: userBooksImage, alt: 'userBooks'},
    { src: profileImage, alt: 'profile' },
    ];

</script>

<style scoped>

</style>