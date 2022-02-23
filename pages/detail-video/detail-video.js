/*
 * @Description: 视频详情页
 * @Author: Jamboy
 * @Date: 2022-02-23 11:00:43
 * @LastEditTime: 2022-02-23 13:53:56
 */
// pages/detail-video/detail-video.js

import { getMvPlayUrl, getRelatedMv } from "../../servers/video/api_video"


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
        const playUrl = await getMvPlayUrl(id)
        const relatedMv = await getRelatedMv(id)
        this.setData({ playUrl, relatedMv })
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