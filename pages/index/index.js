/*
 * @Description: 
 * @Author: Jamboy
 * @Date: 2022-02-18 16:49:13
 * @LastEditTime: 2022-02-21 15:43:30
 */
// index.js
Page({
  data: {

  },
  onLoad: function (options) {
    //Do some initialize when page load.
    wx.request({
      // url: 'http://123.207.32.32:9001/banner',
      url: 'https://mock.apipost.cn/app/mock/project/6057bb29-ae6b-4920-ab67-823d3ba40e6b/banner',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log('res: ', res)
      }
    })
  },
  onReady: function () {
    //Do some when page ready.

  },
  onShow: function () {
    //Do some when page show.

  },
  onHide: function () {
    //Do some when page hide.

  },
  onUnload: function () {
    //Do some when page unload.

  },
  onPullDownRefresh: function () {
    //Do some when page pull down.

  }
})