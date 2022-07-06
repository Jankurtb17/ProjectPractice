<template>
  <div class="container mx-auto">
    <div class="carousel">
      <slot :currentSlide="currentSlide"/>
      <!-- Mavigation -->
      <div class="navigate">
        <div class="toggle-page left" >
          <ChevronLeftIcon @click="prevSlide" class="icons h-3 w-3" />
        </div>
        <div class="toggle-page right"   >
          <ChevronRightIcon @click="nextSlide" class="icons h-3 w-3" />
        </div>
      </div>
      <!-- Pagination -->
      <div class="Pagination">
        <span 
          v-for="(slide, index) in getSlideCount" 
          :key="index" 
          :class="{active : index + 1 === currentSlide - 1}">
          {{slide}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import {ref, onMounted } from 'vue';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/solid';

export default {
  components: {
    ChevronRightIcon,
    ChevronLeftIcon
  },
  setup() {
    const currentSlide = ref(3);
    const getSlideCount = ref(null)

    //next slide

    const nextSlide = () => {
      if(currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value += 1;
    }

    const prevSlide = () => {
      if(currentSlide.value === 1) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value -= 1;
    }

    onMounted(() => {
      getSlideCount.value = document.querySelectorAll('.slide').length
    })

    return {
      currentSlide,
      prevSlide,
      nextSlide,
      getSlideCount
    }
  }
}
</script>

<style lang="scss">
.navigate {
  padding: 0 16px;
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  .toggle-page {
    display: flex;
    flex: 1;
  }

  .right {
    justify-content: flex-end;
  }

  .icons {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: #6347c7;
    color: #fff;
  }
}
</style>
