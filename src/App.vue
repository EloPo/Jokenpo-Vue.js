<template>
  <div id="app">
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("assets/jokenpo.gif");
  background-size: 450px 750px;
  background-repeat: no-repeat;
  overflow: hidden;
  position: fixed;
  width: 800px;
  height: 800px;
}
</style>
