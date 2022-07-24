<template>
  <Jumbutoron />
  <FeaturedTours />
  <PopularDestination />
  <BookingProcess />
  <FooterView />
</template>

<script>
import Jumbutoron from './JumbotronView.vue';
import FeaturedTours from './FeaturedTours.vue';
import PopularDestination from './PopularDestination.vue';
import BookingProcess from './EventsView.vue';
import FooterView from './FooterView.vue';
export default {
  name: 'HelloWorld',
  components: {
    Jumbutoron,
    FeaturedTours,
    PopularDestination,
    BookingProcess,
    FooterView
  },
  props: {
    msg: String
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.carousel {
  position: relative;
  height: 50vh;
  
  .slide-info {
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    max-height: 100%;
    height: 100%;

      img: {
        min-width: 100%;
        height: 100%;
        object-fit: cover;
      }
  }

}
</style>
