<template>
  <div class="main-container">
    <img
        id="video-img"
        @click="goToWatchPage"
        @mouseover="isHover = true"
        @mouseleave="isHover = false"
        :src="isHover ? videoProps.hoverImage : videoProps.coverImage"
    />
    <div class="video-info">
      <img :src="videoProps.ownerImage" id="owner-img" />
      <div class="video-title">
        <div>
          <strong id="title">{{ videoProps.title }}</strong>
        </div>
        <div>{{ videoProps.ownerName }}</div>
        <div>
          {{ videoProps.viewCount }} views
          {{ videoProps.publishDateInMonth }} months ago
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Video",
  data() {
    return {
      isHover: false,
    };
  },
  props: ["videoProps"],
  methods: {
    goToWatchPage() {
      this.$router.push({ path: 'watch', query: { id: this.videoProps.id }});
    },
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 300px;
  font-family: Roboto, Arial, sans-serif;
  font-size: 14px;
  line-height: 18px;
}
#video-img {
  width: 360px;
  height: 200px;
}
.video-info {
  display: flex;
  flex-direction: row;
  width: 360px;
  height: 80px;
}
#owner-img {
  vertical-align: middle;
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
.video-title {
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>