<template>
  <header
    class="bg-transparent md:px-12 h-24 w-full sm:bg-inherit msm:bg-inherit sm:px-2 sm:h-20"
  >
    <nav
      class="flex justify-between items-center xl:container xl:mx-auto sm:p-4 py-4 sm:py-7"
    >
      <!-- Container -->
      <h1 class="text-2xl text-white uppercase font-bold">Batanes</h1>
      <button class="lg:hidden xl:hidden">
        <MenuIcon
          class="px-6 text-white h-5"
          id="menu-icon"
          @click="menuOpen"
          :class="[
            open
              ? 'bi xs:bi-x sm:bi-x msm:bi-x md:bi-x'
              : 'bi xs:bi-filter sm:bi-filter msm:bi-filter md:bi-filter',
          ]"
        />
      </button>
      <ul
        class="fixed min-h-screen xl:relative xl:flex xl:space-y-0 xl:space-x-6 xl:min-h-0 xl:p-0 md:static absolute space-y-4 p-4 sm:w-full msm:w-full transform duration-700 ease-all xl:opacity-100 sm:top-0 sm:bg-gray-50 sm:overflow-x-hidden msm:overflow-x-hidden"
        :class="menu"
      >
        <li
          v-for="link in links"
          :key="link"
          class="text-white sm:text-black md:hidden msm:hidden sm:hidden"
        >
          <a :href="link.link">{{ link.name }}</a>
        </li>
        <div class="lg:hidden xl:hidden sm:flex sm:flex-col">
          <XIcon
            class="h-5 w-5 sm:absolute sm:right-10 sm:top-9"
            @click="menuOpen"
          />
          <li
            v-for="link in links"
            :key="link"
            class="text-white sm:text-black sm:py-1"
          >
            <a :href="link.link">{{ link.name }}</a>
          </li>
        </div>
      </ul>
    </nav>
  </header>
  <router-view />
</template>

<script>
import { MenuIcon, XIcon } from "@heroicons/vue/solid";
export default {
  components: {
    MenuIcon,
    XIcon,
  },
  data() {
    return {
      open: false,
      links: [
        { name: "Tours", link: "#Tours" },
        { name: "Destination", link: "#Destination" },
        { name: "Events", link: "#Events" },
      ],
    };
  },
  methods: {
    menuOpen() {
      this.open = !this.open;
    },
  },
  computed: {
    menu() {
      if (this.open) {
        console.log("open");
        return "md:left-0 msm:left-0 sm:left-0 xs:left-0";
      } else {
        console.log("close");
        return "md:left-[-100%] msm:left-[-100%] sm:left-[-100%] xs:left-[-100%]";
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  color: black;
}

h1 {
  font-family: "Roboto", sans-serif;
}

ul li a {
  text-transform: uppercase;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
}
</style>
