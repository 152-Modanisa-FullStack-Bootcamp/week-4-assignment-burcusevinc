<template>
  <div id="container">
    <div id="watch">Video's ID: {{ $route.query.id }}</div>
  </div>
</template>

<script>
export default {
  name: "WatchPage",
  props: ["allVideosProps"],
};
</script>


<style scoped>
#container{
  background-image: linear-gradient(to right top, #bf9db0, #be9cb9, #b99dc4, #b09fcf, #a2a2da, #94a9e2, #84b1e7, #73b8ea, #6ec2e7, #72cbe1, #7fd2db, #91d9d4);
}
#watch{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-size: 25px;
  text-align: center;
}
</style>