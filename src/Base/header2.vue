<template>
  <header class="bg-transparent  flex justify-between items-center px-4 md:px-12 h-24 w-full">
    <h1 class="text-2xl text-white uppercase font-bold">Batanes</h1>
    <nav class="">
      <!-- Container -->
      <button class="lg:hidden xl:hidden">
        <MenuIcon class="px-6 text-white h-5" id="menu-icon" :class="[open ? 'bi xs:bi-x sm:bi-x msm:bi-x' : 'bi xs:bi-filter sm:bi-filter msm:bi-filter']"/>
      </button>
      <ul class="
        fixed 
        min-h-screen
        xl:relative
        xl:flex
        xl:min-h-0
        xl:space-y-0
        xl:space-x-6
        xl:p-0
        md:static absolute
        space-y-4
        p-4
        transform
        w-full
        duration-700
        ease-all
        "
        :class="[open ? 'left-0 msm:left-0 sm:left-0 xs:left-0': 'msm:left-[-100%] sm:left-[-100%] xs:left-[-100%]']"
        >
        <li v-for="link in links" :key="link" class="text-white">
          <a :href="link.link">{{link.name}}</a>
        </li>
      </ul>
    </nav>
  </header>
  <router-view />
</template>

<script>
import {MenuIcon} from '@heroicons/vue/solid'
export default {
  components: {
    MenuIcon
  },
  data() {
    return {
      open: false,
      links: [
        {name: 'Home', link: '/'},
        {name: 'Shop', link: '/about'},
        {name: 'Contact Us', link: '/'},
        {name: 'Book Now', link: '/'},
      ]
    }
  },
  methods: {
    menuOpen() {
      this.open = !this.open
      console.log('clicked')
    }
  }
}
</script>


<style scoped>
.navbar {
  display: flex;
  color: black;
  
}

h1 {
  font-family: 'Roboto', sans-serif;
}

ul li a {
  text-transform: uppercase;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
}

</style>