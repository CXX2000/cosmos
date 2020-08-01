//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env:'cosmos-cefkm',
      traceUser:true
    })
  }
})