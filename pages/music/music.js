/*
 * @Description: 首页
 * @Author: Jamboy
 * @Date: 2022-02-22 09:37:24
 * @LastEditTime: 2022-02-23 17:28:06
 */
import { getBanner, getHotMusic } from "../../servers/video/api_music"
import { querySelector } from "../../utils/query-selector"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        swiperImageHeight: 0,
        banners: [],
        commendMusic: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
        const banners = await getBanner()
        const commendMusic = await getHotMusic()
        console.log('commendMusic: ', commendMusic)

        this.setData({ banners, commendMusic })
    },

    handleClickSearch(e) {
        console.log('handleClickSearch: ')
    },

    handleImageLoaded() {
        querySelector("#swiper-image").then(res => {
            this.setData({ swiperImageHeight: res[0].height })
        })

    }
})