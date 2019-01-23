<template>
   <content>
     <!-- {{processImages}} -->
    <gallery :images="processImages" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in processImages"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')' }"
    ></div>
  </content>
</template>

<script>
import VueGallery from 'vue-gallery'
import axios from 'axios'
import _ from 'lodash'

export default {
  name: 'Blog',
  data: function () {
    return {
      images: [],
      index: null
    }
  },

  methods: {
    fetchImgs: function () {
      axios.get('http://104.248.234.33:8080/estambres-gallery-service/photos').then((response) => (
        this.images = response.data
      ), (error) => {
        console.log(error)
      })
    }
  },
  computed: {
    processImages: function () {
      let imagesData = this.images
      return _.map(imagesData, el => _.filter(el, function (value, key) { return key.startsWith('url') })).flat(1)
    }
  },
  mounted: function () {
    this.fetchImgs()
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
