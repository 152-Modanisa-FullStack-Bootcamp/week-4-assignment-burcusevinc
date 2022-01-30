<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
html,body {
  height: 100%;
  width:100%;
}
#app{
  display: flex;
  justify-content: center;
}
</style>