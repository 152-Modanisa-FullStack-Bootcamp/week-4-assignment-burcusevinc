import { createLocalVue, shallowMount } from "@vue/test-utils"
import Video from "@/components/Video";
import VueRouter from "vue-router"


function mountComponent() {


    return shallowMount(Video, {
        propsData: {
            videoProps: [{
                "id": 1,
                "videoAddress": "https://www.youtube.com/watch?v=FXpIoQ_rT_c",
                "coverImage": "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-cover.webp",
                "hoverImage": "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-hover.webp",
                "title": "Vue.js Course for Beginners [2021 Tutorial]",
                "viewCount": 254,
                "publishDateInMonth": 4,
                "ownerImage": "https://yt3.ggpht.com/ytc/AKedOLTtJvQ1Vfew91vemeLaLdhjOwGx3tTBLlreK_QUyA=s68-c-k-c0x00ffffff-no-rj",
                "ownerName": "freeCodeCamp.org",
                "description": "Learn Vue 3 by in this full course. Vue.js is an open-source model–view–view model front end JavaScript framework for building user interfaces and single-page applications."
            }]
        }
    })
}

describe('Video.vue', () => {
    //component exist check
    test("video component should exist", () => {
        const wrapper = mountComponent()
        expect(wrapper.exists()).toBeTruthy()
    })

    //video id check
    test("should video id match correctly", () => {
        const wrapper = mountComponent()
        expect(wrapper.vm.$props.videoProps[0].id).toStrictEqual(1)
    })
})