//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  getlogs:function(){
    const that=this
   // const ui=wx.getStorageSync('userinfo')//在缓存中获取openid
    if(!ui.openid){//判断是否登录，未登录则跳转登陆界面
      wx.switchTab({
        url: '/pages/me/me',
      })
    }else{
      wx.cloud.callFunction({
      name:"getlogs",
      data:{
        openid:ui.openid
      },
      success:res=>{
        console.log("res",res)
        that.setData({
          logs:res.result.data.map(log=>{
            var date=util.formatTime(new Date(log.date))
            log.date=date
            return log
          })
        })
      },//判断是否成功
      fail:res=>{console.log("res",res)}
      
    })
    }
    
  },
  //onLoad页面首次加载执行
  //onShow页面每次切换执行
  onShow:function(){
    this.getlogs()
  }
})
