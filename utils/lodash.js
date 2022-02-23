/*
 * @Description: 
 * @Author: Jamboy
 * @Date: 2022-02-23 16:58:28
 * @LastEditTime: 2022-02-23 17:00:20
 */

export function throttle(func, wait = 1000) {
  let last = 0
  return () => {
    const current_time = +new Date()
    if (current_time - last > wait) {
      func.apply(this, arguments)
      last = +new Date()
    }
  }
}