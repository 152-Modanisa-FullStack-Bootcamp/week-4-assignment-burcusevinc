import {pactWith} from 'jest-pact';
import { Matchers } from '@pact-foundation/pact';
const { eachLike, like } = Matchers
import {API} from "@/api";

pactWith({
    consumer: "Frontend", //consumer name
    provider: "Backend", //provider name
}, provider => {
    describe("videos", () => {
        let api
        beforeEach(() => {
            api = new API(provider.mockService.baseUrl) //mocked backend
        })
        test('get video list', async () => {
            console.log(provider)
            // Interaction -> request + response
            await provider.addInteraction({ //mock service
                state: 'get video list successfully',
                uponReceiving: 'a request not empty for video list',
                withRequest: {
                    method: 'GET',
                    path: '/videos',
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8',
                    },
                    //backend istediğimiz içerikteki veriyi bize dönmesi için oluşturulur.
                    body: eachLike({
                        id: like(1),
                        videoAddress: like("https://www.youtube.com/watch?v=FXpIoQ_rT_c%22"),
                        coverImage: like("https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-cover.webp%22"),
                        hoverImage: like("https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-hover.webp%22"),
                        title: like("Vue.js Course for Beginners [2021 Tutorial]"),
                        viewCount: like(254),
                        publishDateInMonth: like(4),
                        ownerImage: like("https://yt3.ggpht.com/ytc/AKedOLTtJvQ1Vfew91vemeLaLdhjOwGx3tTBLlreK_QUyA=s68-c-k-c0x00ffffff-no-rj%22"),
                    })
                }
            })
            const res = await api.getVideoList() //metod, body'nin içini döndürür.
            expect(res[0].id).toEqual(1) //0. verinin id değerinin 1 olmasını bekliyor.
        })
    })
})