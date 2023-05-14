<template>
  <div class="bg-gray-300" id="Destination">
    <div class="container mx-auto">
      <div class="text-center py-16">
        <h1 class="text-xl uppercase tracking-wide" data-aos="fade-up">
          Show me all tours starting from
        </h1>
        <h1 class="text-5xl uppercase font-bold" data-aos="fade-up">
          popular destination
        </h1>
      </div>
      <div
        class="lg:grid lg:grid-cols-4 lg:grid-flow-col lg:gap-4 pb-16 md:grid-rows-1 md:grid-cols-1 sm:grid-cols-1"
      >
        <div
          class="lg:col-span-2 lg:py-4.5 lg:gap-4 md:py-4 md:col-span-1 sm:col-span-1 msm:col-span-1 sm:gap-1"
          data-aos="fade-up"
        >
          <img src="../assets/batanes7.jpg" class="rounded-lg" />
        </div>
        <div
          class="grid lg:grid-rows-2 lg:gap-4 md:grid-rows-1 md:py-1 sm:py-1 msm:py-1"
          data-aos="fade-up"
        >
          <div>
            <img
              src="../assets/batanes6.jpg "
              class="rounded-lg sm:pb-1 msm:pb-1"
            />
          </div>
          <div>
            <img src="../assets/batanes8.jpg " class="rounded-lg" />
          </div>
        </div>
        <div
          class="grid lg:grid-rows-2 lg:gap-4 md:grid-rows-1 md:pb-1 sm:pb-1 msm:pb-1"
          data-aos="fade-up"
        >
          <div>
            <img
              src="../assets/batanes10.jpg "
              class="rounded-lg sm:pb-1 msm:pb-1"
            />
          </div>
          <div>
            <img src="../assets/batanes9.jpg " class="rounded-lg" />
          </div>
        </div>
      </div>
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
    SlideComponent,
  },
  created() {
    AOS.init();
  },
};
</script>

<style scoped></style>
