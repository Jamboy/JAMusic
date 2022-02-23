/*
 * @Description: 
 * @Author: Jamboy
 * @Date: 2022-02-23 16:47:58
 * @LastEditTime: 2022-02-23 16:48:12
 */

export function querySelector(selector) {
  return new Promise(function (resolve, reject) {
    const query = wx.createSelectorQuery()
    query.select(selector).boundingClientRect()
    query.exec((res) => {
      resolve(res)
    })
  })

}