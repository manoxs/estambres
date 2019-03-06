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
@import url(http://fonts.googleapis.com/css?family=Karla:400,700);

#app {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 35px 0px 45px;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;
}
#text {
  text-align: center;
  padding: 10px;
}
</style>
