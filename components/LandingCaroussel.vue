<script setup>

</script>

<template>

  <div class="img-container">
    <div class="cutoutImg"></div>
    <div class="with-bg-size wrap">
      <div class="heading">
        <div class="line-1 fw-bold ">
          <h1>Exploring...</h1>
        </div>
        <div class="line-2 fw-bold ">The Unknown</div>
      </div>
    </div>
    <div class="wave-container">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "splash-image",
  data() {
    return {
      SVGVisible: false
    }

  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      // Any code to be executed when the window is scrolled
      console.log(event)
      this.SVGVisible = true
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
}
</script>
<style scoped>
.wave-container {
  background: rgba(255, 255, 255, 0);
  text-align: center;
  overflow: hidden;
  position: absolute;
  width: 100%;
  bottom: -1rem;
  z-index: 3;
}

.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}

.img-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 120vh;
  /* STUPID!  looks weird
  -webkit-animation: splashFadein 2.5s; 
       -moz-animation: splashFadein 2.5s; 
        -ms-animation: splashFadein 2.5s; 
         -o-animation: splashFadein 2.5s;
            animation: splashFadein 2.5s; */


}

.cutoutImg {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: url('../assets/images/IMG_0781Cutout.webp');
  padding-bottom: -50rem;
}

.heading {
  display: flex;
  flex-direction: column;
  font-weight: 700;
  row-gap: 1rem;
}

.heading h1 {
  font-size: min(4rem, 15vw);
}

.line-1 {
  color: #cb9d0c;
  background-color: rgba(0, 0, 0, 0.363);
  backdrop-filter: blur(3px);
  -webkit-animation: fadeinText1 var(--text-fade-in-speed) var(--text-fade-in-cubic) .5s;
  -moz-animation: fadeinText1 var(--text-fade-in-speed) var(--text-fade-in-cubic) .5s;
  -ms-animation: fadeinText1 var(--text-fade-in-speed) var(--text-fade-in-cubic) .5s;
  -o-animation: fadeinText1 var(--text-fade-in-speed) var(--text-fade-in-cubic) .5s;
  animation: fadeinText1 var(--text-fade-in-speed) var(--text-fade-in-cubic) .5s;
  animation-fill-mode: backwards;
}

.line-2 {
  font-size: 20px;
  color: #cb9d0c;
  background-color: rgba(0, 0, 0, 0.363);
  backdrop-filter: blur(3px);
  width: fit-content;
  -webkit-animation: fadeinText1 var(--text-fade-in-speed) var(--text-fade-in-cubic) 1.5s;
  -moz-animation: fadeinText1 var(--text-fade-in-speed) var(--text-fade-in-cubic) 1.5s;
  -ms-animation: fadeinText1 var(--text-fade-in-speed) var(--text-fade-in-cubic) 1.5s;
  -o-animation: fadeinText1 var(--text-fade-in-speed) var(--text-fade-in-cubic) 1.5s;
  animation: fadeinText1 var(--text-fade-in-speed) var(--text-fade-in-cubic) 1.5s;
  animation-fill-mode: backwards;
}

.with-bg-size {
  background-image: url('../assets/images/IMG_0781.webp');
  width: 100%;
  height: 100%;
  background-position: center;
  /* Make the background image cover the area of the <div>, and clip the excess */
  background-size: cover;
  overflow: hidden;
}

@media only screen and (min-width: 1200px) {
  .with-bg-size {

    padding-top: 24rem;
  }

  .cutoutImg {
    padding-top: 24rem;
  }

  .heading {
    padding-bottom: 40rem;
  }

  .heading h1 {
    font-size: 130px;
  }

  .line-2 {
    font-size: 32px;
  }

  .wave-container {
    bottom: -10rem
  }
}

@media only screen and (min-width: 1700px) {
  .wave-container {
    bottom: -15rem
  }
}
</style>
