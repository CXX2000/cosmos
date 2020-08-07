//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env:'cosmos-cefkm',
      tranceUser:true
    })
  }
  
})