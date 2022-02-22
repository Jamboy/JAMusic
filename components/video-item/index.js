/*
 * @Description: 视频Card
 * @Author: Jamboy
 * @Date: 2022-02-22 17:51:58
 * @LastEditTime: 2022-02-22 18:14:46
 */
// components/video-item/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        item: Object
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        onClickItem(e) {
            const { id } = e.currentTarget.dataset
            this.triggerEvent('click', { id })
        }
    }
})
