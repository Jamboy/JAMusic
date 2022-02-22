/*
 * @Description: 视频
 * @Author: Jamboy
 * @Date: 2022-02-22 09:41:35
 * @LastEditTime: 2022-02-22 18:15:01
 */
// pages/video/video.js

import { getTopMvs } from '../../servers/video/api_video'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        topMvs: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(options) {
        const res = await getTopMvs(0)
        console.log('res: ', res.data[0].mv.videos[0].duration)
        this.setData({ topMvs: res.data })

    },

    onClickItem(e) {
        const { id } = e.detail
        console.log('onClickItem: ', id)
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