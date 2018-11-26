<template>
  <div id="app">
    <header id="text">
      <img src="./assets/logo_estambrescom_v10_Logo_2.png" alt="" width="320px" height="auto">
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  display: flex;
  flex-wrap: wrap;
  padding-left: 15px;
  margin-top: 10px;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  /* -webkit-flex-flow: row wrap; */
}
#text {
  text-align: center;
  padding: 10px;
}
</style>
