const {Given, When, Then} = require("cucumber");
const openUrl = require("../support/action/openUrl"); //definition open url
const waitForSelector = require("../support/action/waitForSelector") //definition wait for selector
const assert = require("assert");

Given(/^that User goes to Video Site Project's HomePage$/, async function () {
    await openUrl.call(this,"/home")
});
When(/^page is loaded$/, async function () {
    await waitForSelector.call(this,'.home-page') //selector
});
Then(/^User can see some of videos' title like$/, async function (arr) {
    const selector = ".main-container"
    for (let [videoTitle] of arr.rawTable) {
        let video = await this.page.$$eval (
            selector, //1.selector
            async (elements, videoTitle) => { //2.function
                //selector'ı title olan elementleri bulur ve texti verilen titlelar ile aynı olanları videos değişkenine atar.
                const videos = elements.find(element => element.querySelector("#title").textContent.includes(videoTitle))
                console.log(videos)
                //eşleşme olmazsa undefined döner, undefined false bir değerdir, false değer döndürmek için iki kez tersini aldım.
                return !!videos
            },
            //3.args
            videoTitle
        )
        console.log(video)
        //objelerin birbiri arasındaki eşitliği kontrol eder.
        assert.strictEqual(video, true) //eval metodu true döner ise assert eder.
    }
});
