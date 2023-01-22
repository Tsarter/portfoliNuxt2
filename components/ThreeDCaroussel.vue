<!-- Based on  Vue 3D library https://wlada.github.io/vue-carousel-3d/examples/-->

<template>

    <div class="carousel-container">
        <carousel-3d :controls-visible="true" :controls-prev-html="'&#10092; '" :controls-next-html="'&#10093;'"
            :autoplay="true" :autoplay-timeout="4000" :count="7" :space="400" :height="800">
            <slide :index="0" :key="0">
                <CarouselCard />
            </slide>
            <slide :index="1" :key="1">
                <CarouselCard />
            </slide>
            <slide :index="2" :key="2">
                <CarouselCard />
            </slide>
            <slide :index="3" :key="3">
                <CarouselCard />
            </slide>
            <slide :index="4" :key="4">
                <CarouselCard />
            </slide>
            <slide :index="5" :key="5">
                <CarouselCard />
            </slide>
            <slide :index="6" :key="6">
                <CarouselCard />
            </slide>

        </carousel-3d>
    </div>

</template>

<script>
import CarouselCard from './CarouselCard.vue';

export default {
    name: "carousel",
    components: { CarouselCard }
};
</script>


<style scoped>
.carousel-home-resources.left-1 {

    transform: translateX(-500px) translateZ(-400px) rotateY(-30deg) !important;
}

.carousel-home-resources.right-1 {
    transform: translateX(500px) translateZ(-400px) rotateY(30deg) !important;
}

.carousel-container {
    height: 800px;
}

.carousel-3d-container {
    height: 800px;
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