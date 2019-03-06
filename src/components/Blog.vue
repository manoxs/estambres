<template>
  <div>
    <div class="columns">
      <div class="column is-half">
          <p class="marca">Marca</p>
            <button class="buttons">NE_9</button>
            <button class="buttons">NE_90</button>
            <button class="buttons">NE_93</button>
            <button class="buttons">NE_950</button>
            <button class="buttons">NE_9</button>
            <button class="buttons">NE_90</button>
            <button class="buttons">NE_93</button>
            <button class="buttons">NE_950</button>
            <button class="buttons">NE_9</button>
            <button class="buttons">NE_90</button>
            <button class="buttons">NE_93</button>
            <button class="buttons">NE_950</button>
      </div>
      <div class="column">
          <p class="tags">Tags</p>
            <button class="buttons">espiga</button>
            <button class="buttons">crochet</button>
            <button class="buttons">thread</button>
            <button class="buttons">espiga</button>
            <button class="buttons">crochet</button>
            <button class="buttons">thread</button>
            <button class="buttons">espiga</button>
            <button class="buttons">crochet</button>
            <button class="buttons">thread</button>
            <button class="buttons">espiga</button>
            <button class="buttons">crochet</button>
            <button class="buttons">thread</button>
      </div>
    </div>
    <content>
    <!-- {{processImages}} -->
      <gallery :images="processImages" :index="index" @close="index = null"></gallery>
      <div
        class="image"
        v-for="(image, imageIndex) in processImages"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')' }">
      </div>
    </content>
  </div>
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
      height: 250px;
      float: left;
      padding: 5px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      border: 1px solid #ebebeb;
      margin: 10px;
      -webkit-box-shadow: 0 0 3px 3px #ebebeb;
      box-shadow: 0 0 3px 3px #ebebeb;
  }
/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media only screen and (max-width: 600px)  {
  .image {
        width: 70px;
        height: 50px;
  }
}
/* Additions for button tag filter */
  #buttons {
    text-align: center;
    margin: 30px;
  }

  button {
    background-color: #d7d7d7;
    border: none;
    padding: 3px 10px 4px 10px;
    border-radius: 4px;
    color: #333;
    font-family: 'Karla', sans-serif;
    font-size: 100%;
  }

  button:hover, button.active {
    background-color: #00cccc;
    color: #fff;
    cursor: pointer;
  }

  .marca{
    font-size:  1.875em;
    font-family: 'Karla', sans-serif;
      color: #333;
  }

  .tags{
    font-size: 1.875em;
    font-family: 'Karla', sans-serif;
      color: #333;
  }

</style>
