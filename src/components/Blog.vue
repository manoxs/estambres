<template>
  <content>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')' }"
    ></div>
  </content>
</template>

<script>
import VueGallery from 'vue-gallery'
export default {
  name: 'Blog',
  data: function () {
    return {
      images: [
        'https://placekitten.com/801/800',
        'https://placekitten.com/802/800',
        'https://placekitten.com/803/800',
        'https://placekitten.com/804/800',
        'https://placekitten.com/805/800',
        'https://placekitten.com/806/800',
        'https://placekitten.com/807/800',
        'https://placekitten.com/808/800',
        'https://placekitten.com/809/800',
        'https://placekitten.com/810/800',
        'https://placekitten.com/811/800',
        'https://placekitten.com/812/800',
        'https://placekitten.com/813/800',
        'https://placekitten.com/814/800',
        'https://placekitten.com/815/800',
        'https://placekitten.com/816/800',
        'https://placekitten.com/817/800',
        'https://placekitten.com/818/800',
        'https://placekitten.com/819/800',
        'https://placekitten.com/820/800',
        'https://placekitten.com/821/800',
        'https://placekitten.com/822/800',
        'https://placekitten.com/823/800',
        'https://placekitten.com/824/800'
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
    width: 200px;
    height: 150px;
    float: left;
    padding: 5px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 10px;
  }
/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media only screen and (max-width: 600px)  {
  .image {
        width: 70px;
        height: 50px;
  }
}
</style>
