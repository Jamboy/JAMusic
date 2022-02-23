/*
 * @Description: 视频
 * @Author: Jamboy
 * @Date: 2022-02-22 09:41:35
 * @LastEditTime: 2022-02-23 10:50:30
 */
// pages/video/video.js

import { getTopMvs } from '../../servers/video/api_video'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        topMvs: [],
        hasMore: true
    },

    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(options) {
        this.getTopMvData(0)
    },

    async getTopMvData(offset) {
        wx.showNavigationBarLoading()
        const { hasMore } = this.data
        if (!hasMore && offset !== 0) { return }

        const res = await getTopMvs(offset)
        let newData = this.data.topMvs
        if (offset === 0) {
            newData = res.data
        } else {
            newData = newData.concat(res.data)
        }
        this.setData({ topMvs: newData, hasMore: res.hasMore })
        wx.hideNavigationBarLoading()
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
    async onPullDownRefresh() {
        this.getTopMvData(0)
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    async onReachBottom() {
        this.getTopMvData(this.data.topMvs.length)
    },

})