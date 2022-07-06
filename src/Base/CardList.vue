<template>
  <div class="cards shadow-lg lg:w-10/12" >
    <div class="container">
      <img :src="getImgUrl(src)" class="w-full"/>
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
</style>
