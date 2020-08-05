const db = wx.cloud.database({});
const cont = db.collection('questions');
Page({
  data: {
    question_list:[]
  },
  onLoad: function(options) {
   // 创建一个变量来保存页面page示例中的this, 方便后续使用
    var _this=this;
    db.collection('questions').get({
      success: res =>{
      console.log(res.data[0])
       this.setData({
         question_list:res.data
       })
      } 
    })
  },
//页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh: function(){
    this.resquestData();
  }
})