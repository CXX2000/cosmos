Page({

  date:{//创建变量
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userinfo:{},//储存用户信息
    openid:"",
    username: '点击登录',
    defaultUrl: '/image/头像.png',
    userTx: '',
    gender: 1,
    province: '',
    //isHide: false
  },

  onGotUserInfo:function(e){
    const that = this
    wx.cloud.callFunction({//调用cloud中的云函数
    name:"login",//云函数名
  success:res=>{//反馈是否调用成功
      console.log("调用成功")
      that.setData({//赋值data数据
        openid:res.result.openid,
        userinfo:e.detail.userInfo//将用户信息保存到变量里
       })
      that.data.userinfo.openid=that.data.openid//把openid保存到userinfo
      console.log("userinfo",that.data.userinfo)//验证是否保存
      wx.setStorageSync('userinfo', that.data.userinfo)//保存缓存
      },
  fail:res=>{
console.log("调用失败")

}

    })
  },
  onLoad:function(options){
    const ui=wx.getStorageSync('userinfo')
    this.setData({
      userinfo:ui,
      openid:ui.openid
    })
  }

})