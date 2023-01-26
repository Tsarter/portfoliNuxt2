<script setup>
import LandingCaroussel from '~/components/LandingCaroussel.vue';
import PitchureOfMe from '~/components/PitchureOfMe.vue';
import SplashStart from '~/components/SplashStart.vue';
import ThreeDCaroussel from '~/components/ThreeDCaroussel.vue';
var hideLaunch = ref(false) 
</script >

<template>

  <!-- <Tutorial /> -->
  <div>
    <SplashStart @hide-launch="hideLaunch = true" />

    <!-- Umm v-show makes visible, v-if creates from skratch. ThreeDCaroussel only works with v-if -->
    <div class="content" v-show="hideLaunch">

      <LazyLandingCaroussel>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#605cf4" fill-opacity="1"
            d="M0,64L48,58.7C96,53,192,43,288,42.7C384,43,480,53,576,69.3C672,85,768,107,864,122.7C960,139,1056,149,1152,133.3C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </LazyLandingCaroussel>
      <LazyInteractiveIphone />
      <client-only placeholder="loading...">
        <LazyPitchureOfMe />
      </client-only>

      <div class="h-1" v-observe-visibility="{
        callback: onVisibilityChange,
        once: true,
      }">
      </div>

    </div>

    <div class="h-screen">
      <div class="flex justify-center w-full mb-24">
        <h1 class="text-white font-bold text-6xl">Websites</h1>
      </div>
      <LazyThreeDCaroussel ref="Caroussel" v-if="isVisible" />
    </div>
    <div class="h-screen">
      <div class="flex justify-center w-full mb-24">
        <h1 class="text-white font-bold text-6xl">Apps</h1>
      </div>
      <LazyThreeDCaroussel ref="Caroussel" v-if="isVisible" />
    </div>
    <div class="h-screen">
      <div class="flex justify-center w-full mb-24">
        <h1 class="text-white font-bold text-6xl">Hobbies</h1>
      </div>
      <LazyThreeDCaroussel ref="Caroussel" v-if="isVisible" />
    </div>


  </div>
</template>

<script>

import { ref } from 'vue';
import { ObserveVisibility } from 'vue-observe-visibility'
import InteractiveIphone from '~/components/InteractiveIphone.vue';


export default {
  name: "IndexPage",
  components: { PitchureOfMe, SplashStart, LandingCaroussel, ThreeDCaroussel, InteractiveIphone },
  setup() {
    const Caroussel = ref(null)
    const CarousselIsVisible = useElementVisibility(Caroussel)

    return {
      Caroussel,
      CarousselIsVisible,
    }
  },
  directives: {
    ObserveVisibility
  },
  data() {
    return {
      isVisible: false
    }
  },
  methods: {
    onVisibilityChange(isVisible, entry) {
      if (isVisible) {
        // element is now visible in the viewport
        this.isVisible = true
        console.log("Entry", entry)
      } else {
        // element is no longer visible in the viewport
        this.isVisible = false
      }
    }
  }
}
</script>
