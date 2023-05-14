<template>
  <div class="featured-tours pb-28" id="Tours">
    <h1 class="uppercase text-2xl text-center">Explore your catergory</h1>
    <h1
      class="font-bold text-5xl uppercase xs:text-center sm:text-center md:text-center sm:pb-10 lg:text-center"
    >
      Featured Tours
    </h1>
    <div
      data-aos="fade-up"
      class="tour-cards flex lg:space-x-5 lg:flex-row sm:flex-col md:flex-col md:space-x-0 sm:space-x-0 justify-center sm:space-x-1 msm:space-x-1 items-center"
    >
      <CardList
        class="mt-7"
        v-for="destination in destinations"
        :key="destination"
        :src="destination.img"
        :title="destination.name"
      >
        <div class="px-5 mb-11">
          <p class="text-2xl font-medium">{{ destination.price }}</p>
          <p class="text-xl mt-1 mb-1 md:cursor-pointer sm:cursor-pointer">
            Inclusions
          </p>
          <div v-for="inclusions in destination.inclusions" :key="inclusions">
            <ul class="px-5">
              <li class="list-disc">
                {{ inclusions }}
              </li>
            </ul>
          </div>
        </div>
      </CardList>
    </div>
  </div>
</template>

<script>
import CardList from "../Base/CardList.vue";
import AOS from "aos";
export default {
  data() {
    return {
      isHidden: false,
      status: {},
      destinations: [
        {
          id: "1",
          name: "Amboy Hometel Travel Tours & Services",
          price: "5500/Person",
          img: "batanes6.jpg",
          location: "San Antonio, Basco",
          inclusions: [
            "2 days tour",
            "Beachfront Accommodation(Aircon rooms)",
            "Car Tour service",
            "Airport Transfer",
            "Breakfast & Lunch",
            "All Government tour fees",
            "DOT Accredited guides",
          ],
        },
        {
          id: "2",
          name: "Chanpan Travel & Tours",
          price: "4500/Person",
          img: "batanes7.jpg",
          location: "Itbud, Uyugan",
          inclusions: [
            "2 days tour",
            "Beachfront Accommodation(Aircon rooms)",
            "Car Tour service",
            "Airport Transfer",
            "Breakfast & Lunch",
            "All Government tour fees",
            "DOT Accredited guides",
          ],
        },
        {
          id: "3",
          name: "Fountain of Youth",
          price: "5000/Person",
          img: "batanes9.jpg",
          location: "Diura, Mahatao",
          inclusions: [
            "2 days tour",
            "Beachfront Accommodation(Aircon rooms)",
            "Car Tour service",
            "Airport Transfer",
            "Breakfast & Lunch",
            "All Government tour fees",
            "DOT Accredited guides",
          ],
        },
      ],
    };
  },
  components: {
    CardList,
  },
  mounted() {
    AOS.init();
  },
};
</script>

<style></style>
