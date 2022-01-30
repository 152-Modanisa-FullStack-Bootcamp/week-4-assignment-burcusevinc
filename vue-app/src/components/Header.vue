<template>
  <div class="container">
    <button id="Favorite">Favorites</button>
  </div>
</template>

<script>
export default {
  name:"Header"
}
</script>


<style scoped>
.container{
  display: flex;
  justify-content:flex-end;
  width:100%;
  height:50px;
  background-image: linear-gradient(to right bottom, #2a5faf, #0087c1, #00a7af, #4fc08e, #b7d17b);
}
#Favorite{
  margin-right: 20px;
  margin-top: 5px;
  width:80px;
  height:40px;
}
</style>