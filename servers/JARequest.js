/*
 * @Description: 网络请求类
 * @Author: Jamboy
 * @Date: 2022-02-22 09:15:42
 * @LastEditTime: 2022-02-22 09:58:21
 */

const BASE_URL = 'http://123.207.32.32:9001'

class JARequest {
  request(url, data, method = 'GET') {
    return new Promise((resolve, reject) => {
      wx.request({
        url: BASE_URL + url,
        method,
        header: {
          'Content-Type': 'application/json'
        },
        data,
        success: function (res) {
          if (res.statusCode === 200) {
            if (res?.data?.code === 200) {
              resolve(res.data)
            }
          } else {
            wx.showToast({
              title: res?.data?.errMsg,
            })
          }
        },
        fail: function (err) {
          reject(err)
        }
      })
    })
  }

  get(url, data) {
    return this.request(url, data, 'GET')
  }

  post(url, data) {
    return this.request(url, data, 'post')
  }
}

export default new JARequest()

