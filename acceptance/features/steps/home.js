const {Given, When, Then} = require("cucumber");
const openUrl = require("../support/action/openUrl"); //definition open url
const waitForSelector = require("../support/action/waitForSelector") //definition wait for selector

Given(/^that User goes to Video Site Project's HomePage$/, async function () {
    await openUrl.call(this,"/home")
});
When(/^page is loaded$/, async function () {
    await waitForSelector.call(this,'.home-page') //selector
});
Then(/^User can see some of videos' title like$/, async function () {
    //pact yazılacak, axios isteği yapılıyor. pact istek yapmadan yazılır.
    //axios isteği yapılacak.
        //api js dosyası oluşturulacak.




});