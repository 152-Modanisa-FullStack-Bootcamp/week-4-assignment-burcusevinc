<template>
  <div class="home-page">
    <Header></Header>
    <div class="video-container">
      <Video v-for="video in videos" :key="video.id" :videoProps="video"></Video>
    </div>

  </div>
</template>

<script>
import API from "@/api"
import Video from "@/components/Video";
import Header from '../components/Header.vue';

export default {
  name: "Home.vue",
  components:{
    Video,
    Header
  },
  data() {
    return {
      videos: [],
    };
  },
  async created()
  {
    // fetch video data
    this.videos = await API.getVideoList();
    console.log(this.videos)
  }
}
</script>

<style scoped>
.home-page {
  width: 1600px;
}
.video-container{
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: space-evenly;
}
</style>