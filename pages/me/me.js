Page({
  data: {
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      isHide: false,
      userInfo:{},
      openid:"",
      userinfo:{}
  },

  onLoad: function() {
      var that = this;
      const ui = wx.getStorageSync('userinfo')
      this.setData({
        userinfo:ui,
        openid:ui.openid
      })
      // 查看是否授权
      wx.getSetting({
          success: function(res) {
              if (res.authSetting['scope.userInfo']) {
                wx.getUserInfo({
                  
                  success: function(res) {
                      // 用户已经授权过,不需要显示授权页面,所以不需要改变 isHide 的值
                      
                      wx.login({
                          success: res => {
                              // 获取到用户的 code 之后：res.code
                              console.log("用户的code:" + res.code);
                              
                          }
                      });
                  }
              });
              } else {
                  // 用户没有授权 改变 isHide 的值，显示授权页面
                  that.setData({
                      isHide: true
                  });
              }
          }
      });
  },

  bindGetUserInfo: function(e) {
      if (e.detail.userInfo) {
          //用户按了允许授权按钮
          var that = this;
          console.log("用户的信息如下：");
          console.log("userinfo",e.detail.userInfo);
          //授权成功后,通过改变 isHide 的值，让实现页面显示出来
          that.setData({
            isHide: false
          });
          
      } else {
          //用户按了拒绝按钮
          wx.showModal({
              title: '警告',
              content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
              showCancel: false,
              confirmText: '返回授权',
              success: function(res) {
                  // 用户没有授权成功，不需要改变 isHide 的值
                  if (res.confirm) {
                      console.log('用户点击了“返回授权”');
                  }
              }
          });
      }  
  },
})


