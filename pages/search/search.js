// pages/search/search.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
  
  },

  showInput: function () {
    this.setData({
        inputShowed: true
    })
  },

  // 取消搜索,返回主页面
  hideInput: function () {
wx.navigateTo({
//跳转，返回主页面路径
      url: '../index/index'   
    })
  }
});