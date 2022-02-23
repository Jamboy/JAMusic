/*
 * @Description: 视频详情页
 * @Author: Jamboy
 * @Date: 2022-02-23 11:00:43
 * @LastEditTime: 2022-02-23 14:53:23
 */
// pages/detail-video/detail-video.js

import { getMvPlayUrl, getRelatedMv, getDetailMv } from "../../servers/video/api_video"


Page({

    /**
     * 页面的初始数据
     */
    data: {
        playUrl: '',
        relatedMv: [],
        mvInfo: {
            name: '孤勇者 (《英雄联盟：双城之战》动画剧集中文主题曲)',
            artistName: "陈奕迅",
            playCount: 6706410,
            publishTime: "2021-12-07",
        },
        item: {
            cover: "http://p1.music.126.net/vkdxv9FemVhmmP1HMhN4uw==/109951166702989777.jpg",
            name: '孤勇者 (《英雄联盟：双城之战》动画剧集中文主题曲)',
            playCount: 6706410,
            artistName: "陈奕迅",
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
        const { id } = options
        this.getPageData(id)
        // Promise.all([getMvPlayUrl(id), getRelatedMv(id), getDetailMv(id)])
        //     .then(values => {
        //         this.setData({ playUrl: values[0], relatedMv: values[1], detailMv: values[2] })
        //     })
        // const playUrl = await getMvPlayUrl(id)
        // const relatedMv = await getRelatedMv(id)
        // const detailMv = await getDetailMv(id)
        // console.log('detailMv: ', detailMv)
        // this.setData({ playUrl, relatedMv, detailMv })
    },

    getPageData(id) {
        getMvPlayUrl(id).then(res => {
            this.setData({ playUrl: res })
        })
        getRelatedMv(id).then(res => {
            this.setData({ relatedMv: res })

        })
        getDetailMv(id).then(res => {
            this.setData({ detailMv: res })
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})