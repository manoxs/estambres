<template>
  <div>
    <div class="columns">
      <div class="tags">Marca</div>
      <div class="column is-half">
        <div v-for="(marca, indexMarca) in marcas" :key="indexMarca">
          <button @click="clickedMarca(indexMarca)" :class="{'active': isClickedMarca[indexMarca]}">{{marca}}</button>
          <!-- {{processMarcas}} -->
        </div>
      </div>
      <div class="tags">Tags</div>
      <div class="column">
          <div v-for="(tag, indexTag) in tags" :key="indexTag">
             <button @click="clickedTag(indexTag)" :class="{'active': isClickedTag[indexTag]}">{{tag}}</button>
            <!-- {{filterTags}} -->
          </div>
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
      tags: ['nylon', 'espiga', 'omega', 'crochet', 'thread', 'bordado'],
      marcas: ['NE_9', 'NE_90', 'NE_44'],
      isClickedTag: [],
      isClickedMarca: [],
      tag: [],
      index: null
    }
  },
  beforeMount () {
    // set all values to false
    this.marcas.forEach((marca, indexMarca) => this.$set(this.isClickedMarca, indexMarca, false))
    this.tags.forEach((tag, indexTag) => this.$set(this.isClickedTag, indexTag, false))
  },
  methods: {
    fetchImgs: function (params) {
      axios.get('http://104.248.234.33:8080/estambres-gallery-service/photos/', {
        params: params
      }).then((response) => (
        this.images = response.data
      ), (error) => {
        console.log(error)
      })
    },
    clickedTag: function (indexTag) {
      // toggle the active class
      this.$set(this.isClickedTag, indexTag, !this.isClickedTag[indexTag])
      let tagsSelectedSingle = _.keys(_.pickBy(this.isClickedTag, _.identity))
      // let tag = this.tag
      if (tagsSelectedSingle.indexOf('0') >= 0) {
        var params = {
          tag: ['naylon']
        }
        this.fetchImgs(params)
      }
      if (tagsSelectedSingle.indexOf('1') >= 0) {
        params.tag.push('espiga')
        this.fetchImgs(params)
      } else {
        this.fetchImgs()
      }
    },
    clickedMarca: function (indexMarca) {
      this.$set(this.isClickedMarca, indexMarca, !this.isClickedMarca[indexMarca])
      console.log(this.isClickedMarca)
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
      width: 180px;
      height: 200px;
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

button:hover {
    background-color: #0052cc;
    color: #fff;
    cursor: pointer;
}

button.active {
    background-color: #00cccc;
    color: #fff;
    cursor: pointer;
}

.tags{
  font-size: 1.875em;
  font-family: 'Karla', sans-serif;
  color: #333;
}
.active {
  background: red
}
.column {
  display: flex;
  padding: 5px;
}

</style>
