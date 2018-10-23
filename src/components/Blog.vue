<template>
  <div class="Blog">
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
    ></div>
  </div>
</template>

<script>
import VueGallery from 'vue-gallery'
export default {
  name: 'Blog',
  data: function () {
    return {
      images: [
        'http://lorempixel.com/400/200/cats/1/',
        'http://lorempixel.com/400/200/cats/2/',
        'http://lorempixel.com/400/200/cats/3/',
        'http://lorempixel.com/400/200/cats/4/'
      ],
      index: null
    }
  },

  components: {
    'gallery': VueGallery
  }
}
</script>

<style scoped>
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
</style>
