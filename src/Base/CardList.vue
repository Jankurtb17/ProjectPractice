<template>
  <div class="cards shadow-xl 
    
    ">
    <div>
      <img :src="getImgUrl(src)" 
        class="
          w-auto 
          lg:w-auto 
          sm:w-full 
          msm:w-full 
          md:w-auto
          md:px-3
          md:pt-2
          lg:px-3 
          lg:pt-2
          sm:px-3
          sm:py-2
          msm:px-3
          msm:pt-2
        "/>
    </div>
    <div class="card-body">
      <h1 class="text-xl font-bold tracking-2 px-5 py-3">{{title}}</h1>
      <p>{{content}}</p>
      <slot>

      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'content', 'src'],
  methods: {
    getImgUrl(path) {
      return require('../assets/'+path)
    }
  }
}
</script>

<style scoped>
img {
  height: 27vh;
}

.cards {
  border: 1px solid rgba(0, 0, 0, 0.2);
}
</style>
