<!-- Based on  Vue 3D library https://wlada.github.io/vue-carousel-3d/examples/ -->



<template>
    <div class="carousel-container">
        <carousel-3d :controls-visible="true" :controls-prev-html="'&#10092; '" :controls-next-html="'&#10093;'"
            :autoplay="false" :autoplay-timeout="4000" :count="7" :space="300" :height="500">
            <slide :index="0" :key="0">
                <CarouselCard imageUrl="/eviikingidViking.png" title="E-Viikingid"
                    description="A visually beatiful webpage made in wordpress." url="http://viikingid.unaux.com/" />
            </slide>
            <slide :index="1" :key="1">
                <CarouselCard imageUrl="/viking-logo-Transparent.png" title="Viiking"
                    description="A single page webapp made purely in css, html, javascript."
                    url="https://www.viiking.tk/" />
            </slide>
            <slide :index="2" :key="2">
                <CarouselCard imageUrl="/toboTaxi.jpg" title="Tobo" description="An modified version of HTML5UP template."
                    url="https://simplytobo.eu/" />
            </slide>
            <slide :index="3" :key="3">
                <CarouselCard imageUrl="/shrekRacing.png" title="World Rally Shrek" url="https://shrekracing.tt23.repl.co/"
                    description='A modified version of the website "Cyberpunk 2077".' />
            </slide>
            <slide :index="4" :key="4">
                <CarouselCard imageUrl="/rockRockStore.jpg" title="Väekivid" url="https://vaekivid.simplytobo.eu/"
                    description="An online shop made with React.js, with working state managment and payments." />
            </slide>

            <slide :index="5" :key="5">
                <CarouselCard imageUrl="/cibus.jpg" title="Cibus" url="https://cibus.tt23.repl.co/"
                    description="A single page webapp with Google login and Supabase as database." />
            </slide>
            <slide :index="6" :key="6">
                <CarouselCard imageUrl="/kahoot.jpg" title="Katoot" url="https://replit.com/@TT23/kursbuch3"
                    description="Yes, I made my own server and website from scratch, just to play one game of katoot ." />
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
    border-width: 0 !important;
    color: white;
}

.carousel-3d-slide.current {

    background-color: rgba(0, 0, 0, 0.863) !important;

}
</style>