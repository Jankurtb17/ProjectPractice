<template>
  <section>
    <CardList 
      :title="about.title"
      :content="about.content"
      :src="about.src"
    />
  </section>
</template>

<script>
import CardList from '../Base/CardList.vue'
export default {
  components: {
    CardList
  },
  data() {
    return {
      about: {
        title: 'Placello',
        content: 'Portal Sheesh',
        src: '../assets/logo.png'
      }
    }
  }
}
</script>
