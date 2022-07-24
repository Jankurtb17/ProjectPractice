<template>
  <div >
    <div class="container mx-auto">
      <div class="text-center py-16 ">
        <h1 class="text-5xl uppercase font-bold text-black">Events</h1>
      </div>
      <div v-for="event in events" :key="event">
        <div 
          data-aos="zoom-in"
          class="grid grid-cols-5 mb-10 space-x-5 sm:grid-cols-1">
          <div class="flex flex-col col-span-1 lg:text-center ">
            <h1 class="text-2xl uppercase font-semibold text-indigo-500 sm:pl-4">{{event.month}}</h1>
            <h1 class="text-5xl uppercase font-bold pl-5 text-gray-600 sm:pl-5">{{event.day}}</h1>
          </div>
          <div class="col-span-2">
            <img :src="getImgUrl(event.image)" alt="">
          </div>
          <div class="col-span-2">
            <div class="mb-5">
              <h1 class="text-3xl font-bold uppercase tracking-wide mb-16 sm:text-center sm:mt-5 sm:mb-5">{{event.title}}</h1>
              <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consequatur enim voluptatibus blanditiis. Odio natus minima unde, aspernatur labore adipisci obcaecati aliquam debitis iure sapiente voluptatum sunt? Recusandae, possimus temporibus.</p>
            </div>
            <div class="mb-10">
              <a href="#" class="text-xl font-medium text-gray-800 mt-10">View Event Details</a>
            </div>
            <div class="border-b-4 ">
            </div>
          </div>
        </div>
       
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          "month": "Apr",
          "day": "15",
          "title": "Basco day",
          "description": "Lorem ipsum dolar sit ament contra inmba nista",
          "image": "batanes10.jpg"
        },
        {
          "month": "Jun",
          "day": "26",
          "title": "238th Batanes day",
          "description": "Lorem ipsum dolar sit ament contra inmba nista",
          "image": "batanes9.jpg"
        },
      ]
    }
  },
  methods: {
    getImgUrl(path) {
      return require('../assets/'+path)
    }
  }
}
</script>