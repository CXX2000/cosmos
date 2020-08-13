// pages/answer/answer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  data: {
    files: []
  },

  chooseImage: function(e) {
    var that = this;    var images = that.data.files;
    wx.chooseImage({
      count: 3 - images.length,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
      }
    })
  },

  previewImage: function(e) {
    wx.previewImage({
      current: e.currentTarget.id,
      urls: this.data.files
    })
  },

  deleteImage: function(e) {
    var that = this;    var images = that.data.files;    var index = e.currentTarget.dataset.index; //获取当前长按图片下标
    wx.showModal({
      title: '系统提醒',
      content: '确定要删除此图片吗？',
      success: function(res) {
        if (res.confirm) {
          images.splice(index, 1);
        } else if (res.cancel) {          
          return false;
        }
        that.setData({
          files: images
        });
      }
    })
  }
})