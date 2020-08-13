// pages/index/index.js
Page({
  //mixins: [require('weui-wxss-master/dist/mixin/themeChanged')],
  data: {
  search: {
  searchValue: '',
  showClearBtn: false
      },
  searchResult: [],
  search_list:[],
  inputShowed: false,
  inputVal: "",
  hidebuttom:false,
  question:[],
  QuserId:[],

  btnWidth: 300, //删除按钮的宽度单位
  startX: "", //收支触摸开始滑动的位置
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
  // 获取搜索中的值
  btn_name: function (res) {
    console.log(res.currentTarget.dataset.index, res.currentTarget.dataset.name);
   console.log(res.currentTarget.dataset.index, res.currentTarget.dataset.id);

   var that = this;

   that.hideInput();

   that.setData({
     viewShowed: true,
     ques: res.currentTarget.dataset.name,
     userId: res.currentTarget.dataset.id
   });
 },
  navmap: function (e) {//跳转问题详情页，页面不变，问题回答传参
    wx.navigateTo({
      url: '../detail_question/detail_question?detail=' + e.currentTarget.dataset.detail,//问题详情页
      /*success:function(res){
        res.eventChannel.emit('acceptDataFromOpenerPage',{
          data:"detail_question"
        })
      }*/
    })
  },
  showInput: function () {
    this.setData({
        inputShowed: true
    });
},
hideInput: function () {
  this.setData({
      inputVal: "",
      inputShowed: false
  });
},
clearInput: function () {
    this.setData({
        inputVal: ""
    });
},
inputTyping: function (e) {
  console.log(e.detail.value)
    this.setData({
        inputVal: e.detail.value
    });

    //连接数据库
const db = wx.cloud.database()
var that = this
db.collection('Q-A').where({
//使用正则查询，实现对搜索的模糊查询
question: db.RegExp({
regexp: e.detail.value,
//从搜索栏中获取的value作为规则进行匹配。
options: 'i',
//大小写不区分
})
}).get({
success: res => {
console.log(res)
console.log("question",res.data)
wx.setStorageSync('res', res)
that.setData({
search_list: res.data,

})
}
})
//存入缓存
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
  