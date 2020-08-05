const db = wx.cloud.database({});
const cont = db.collection('questions');
Page({
  data: {
    question_list:[] 
  },
  onLoad: function(options) {
   // 创建一个变量来保存页面page示例中的this, 方便后续使用
    var _this=this;
    db.collection('questions').get({ //获取数据库数据
      success: res =>{
      console.log(res.data[0])
       this.setData({
         question_list:res.data //将从数据库获取的数据存在question_list
       })
      } 
    })
  },
//页面相关事件处理函数--监听用户下拉动作(不确定这个有没有起作用orz)
  onPullDownRefresh: function(){
    this.resquestData();
  },
 // 点击进入详情页
 clickNew: function (event) {
  // 获取事件对象
  console.log(event) //这行是测试的时候看打印结果的，不必须
  // 获取点击对应的下标
  //wx.setStorageSync('_id', e.currentTarget.id)
  var qid = event.currentTarget.dataset.bzid //获取该条数据的_id，赋值给qid
  console.log(qid) //这行是测试的时候看打印结果的，不必须

  //wx.navigateTo 会触发页面隐藏onHide
  wx.navigateTo({
    url: '/pages/detail_question/detail_question?id=' + qid, //跳转到位于detail_question的详情页
  })
}

})