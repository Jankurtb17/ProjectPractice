<template>
  <div class="bg-gray-300">
    <div class="container mx-auto">
      <div class="text-center py-16 ">
        <h1 class="text-xl uppercase tracking-wide" data-aos="fade-up">Show me all tours starting from</h1>
        <h1 class="text-5xl uppercase font-bold" data-aos="fade-up">popular destination</h1>
      </div>
      <div class="
        lg:grid 
        lg:grid-cols-4 
        lg:grid-flow-col 
        lg:gap-4 
        pb-16 
        md:grid-rows-1
        md:grid-cols-1
        "
        >
        <div 
        class="
          lg:col-span-2 
          lg:py-4.5
          lg:gap-4
          md:py-4
          md:col-span-1
          sm:col-span-1
          " data-aos="fade-up">
          <img src="../assets/batanes7.jpg" class="rounded-lg " />
        </div>
        <div class="grid 
          lg:grid-rows-2 
          lg:gap-4
          md:grid-rows-1
          md:py-4
          sm:py-4
          " data-aos="fade-up">
          <div>
            <img src="../assets/batanes6.jpg " class="rounded-lg"/>
          </div>
          <div>
            <img src="../assets/batanes8.jpg " class="rounded-lg"/>
          </div>
        </div>
        <div class="grid 
          lg:grid-rows-2 
          lg:gap-4
          md:grid-rows-1
          md:py-4
          sm:py-4"
          data-aos="fade-up">
          <div>
            <img src="../assets/batanes10.jpg " class="rounded-lg "/>
          </div>
          <div>
            <img src="../assets/batanes9.jpg " class="rounded-lg "/>
          </div>
        </div>
      </div>
      <CarouselComponent class="carousel lg:hidden sm:block md:block" v-slot="{currentSlide}">
        <SlideComponent v-for="(slide, index) in carouselSlides" :key="index">
          <div v-show="currentSlide === index+1" class="slide-info">
            <img :src="require(`../assets/${slide}.jpg`)" />
          </div>
        </SlideComponent>
      </CarouselComponent>
    </div>
  </div>
  
</template>

<script>
import CarouselComponent from "../components/CarouselComponent";
import SlideComponent from "../components/SlideComponent.vue";
import AOS from "aos";
export default {
  components: {
    CarouselComponent,
    SlideComponent
  },
  created() {
    AOS.init();
  },
  setup() {
    const carouselSlides = ['batanes10', 'batanes9', 'batanes8']

    return {
      carouselSlides
    }
  }
}
</script>

<style scoped>

</style>