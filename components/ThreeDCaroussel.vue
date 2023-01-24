<!-- Based on  Vue 3D library https://wlada.github.io/vue-carousel-3d/examples/-->



<template>

    <div class="carousel-container">
        <carousel-3d :controls-visible="true" :controls-prev-html="'&#10092; '" :controls-next-html="'&#10093;'"
            :autoplay="false" :autoplay-timeout="4000" :count="3" :space="300" :height="600">
            <slide :index="0" :key="0">
                <CarouselCard imageUrl="/simplytoboWebsite.webp" />
            </slide>
            <slide :index="1" :key="1">
                <CarouselCard imageUrl="/cibus.jpg" />
            </slide>
            <slide :index="2" :key="2">
                <CarouselCard imageUrl="/toboTaxi.jpg" />
            </slide>



        </carousel-3d>
    </div>

</template>

<script>
import CarouselCard from './CarouselCard.vue';

export default {
    name: "carousel",
    components: { CarouselCard },
    data() {
        return {
            url: "@/assets/images/simplytoboWebsite.webp"
        }
    }
};
</script>


<style scoped>
/* .left-1 {

    transform: translateX(-500px) translateZ(-400px) rotateY(-30deg) !important;
}

.right-1 {
    transform: translateX(500px) translateZ(-400px) rotateY(30deg) !important;
} */

/* .left-1 {

    opacity: 0.5 !important;
}

.right-1 {
    opacity: 0.5 !important;
} */

.carousel-container {
    /* height: 600px; */
}

.carousel-3d-container {
    /* height: 600px; */
}

.carousel-3d-slide {
    /* height: 800px !important; */
    background-color: rgba(0, 0, 0, 0.767) !important;
    border-radius: 1rem !important;
    color: white;
}

.carousel-3d-slide.current {

    background-color: rgba(0, 0, 0, 0.863) !important;

}
</style>