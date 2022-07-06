<template>
  <div class="header ">
    <div class="backdrop">
      <TheHeader />
    </div>
  </div>
</template>

<script>
import TheHeader from './Base/TheHeader.vue'

export default {
  components: {
    TheHeader
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

* {
  box-sizing: border-box;
}
body {
  padding: 0;
  margin: 0;
  font-family: 'Roboto';
}

.header {
  background: url('./assets/Batanes11.jpg') no-repeat center;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
  position: relative;
}

.backdrop {
  height: 90vh;
  
}

</style>
