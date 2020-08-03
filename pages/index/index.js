Page({
  data: {
  search: {
  searchValue: '',
  showClearBtn: false
      },
  searchResult: []
  },
  onLoad: function (options) {
  },
  onReady: function () {
  },
  onShow: function () {
  },
  onHide: function () {
  },
  onUnload: function () {
  // 页面关闭
  },
  
  //输入内容时
  searchActiveChangeinput: function (e) {
  const val = e.detail.value;
  this.setData({
  'search.showClearBtn': val != '' ? true : false,
  'search.searchValue': val
  })
  },
  //点击清除搜索内容
  searchActiveChangeclear: function (e) {
  this.setData({
  'search.showClearBtn': false,
  'search.searchValue': ''
  })
  },
  //点击聚集时
  focusSearch: function () {
  if (this.data.search.searchValue) {
  this.setData({
  'search.showClearBtn': true
  })
  } 
  },
  //搜索提交
  searchSubmit: function () {
  const val = this.data.search.searchValue;
  if (val) {
  const that = this,
      app = getApp();
  // 搜索中提示
  wx.showToast({
  title: '搜索中',
  icon: 'loading' 
  });
  // 搜索请求路径

  wx.request({
  url: app.globalData.API_URL + 'searchTeam',
  data: {
  keywords: val,
  user_id: app.globalData.myInfo.user_id
  },
  method: 'GET', 
  success: function (res) {
  let searchResult = res.data.data;
  const len = searchResult.length;
  for (let i = 0; i < len; i++) {
  searchResult[i]['team_avator'] = app.globalData.STATIC_SOURCE + searchResult[i]['team_avator'];
  }
  that.setData({
  searchResult: searchResult,
  'search.showClearBtn': false,
  })
  },
  fail: function () {
  },
  complete: function () {
  wx.hideToast();
  } 
  }) 
  }   
  },
  
  //跳转到哲学页面
jumptozhexue: function(options){
  wx.navigateTo({
    url: '../subject/zhexue/zhexue'
  })
},
//跳转到经济学页面
jumptojingjixue: function(options){
  wx.navigateTo({
    url: '../subject/jingjixue/jingjixue'
  })
},
//跳转到法学页面
jumptofaxue: function(options){
  wx.navigateTo({
    url: '../subject/faxue/faxue'
  })
},
//跳转到教育学页面
jumptojiaoyuxue: function(options){
  wx.navigateTo({
    url: '../subject/jiaoyuxue/jiaoyuxue'
  })
},
//跳转到文学页面
jumptowenxue: function(options){
  wx.navigateTo({
    url: '../subject/wenxue/wenxue'
  })
},
//跳转到历史学页面
jumptolishixue: function(options){
  wx.navigateTo({
    url: '../subject/lishixue/lishixue'
  })
},
//跳转到理学页面
jumptolixue: function(options){
  wx.navigateTo({
    url: '../subject/lixue/lixue'
  })
},
//跳转到工学页面
jumptogongxue: function(options){
  wx.navigateTo({
    url: '../subject/gongxue/gongxue'
  })
},
//跳转到农学页面
jumptonongxue: function(options){
  wx.navigateTo({
    url: '../subject/nongxue/nongxue'
  })
},
//跳转到医学页面
jumptoyixue: function(options){
  wx.navigateTo({
    url: '../subject/yixue/yixue'
  })
},
//跳转到管理学页面
jumptoguanlixue: function(options){
  wx.navigateTo({
    url: '../subject/guanlixue/guanlixue'
  })
},
//跳转到艺术学页面
jumptoyishuxue: function(options){
  wx.navigateTo({
    url: '../subject/yishuxue/yishuxue'
  })
}
  })
  