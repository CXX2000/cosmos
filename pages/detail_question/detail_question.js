// pages/detail_question/detail_question.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    qname:[],
    qcontent:[],
    qsubject:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
  console.log(e.id) //这行是测试的时候看打印结果的，不必须
   let that=this	//异步请求，let一个that
    let a=e.id		//声明一个a,获取id(就是_id)
   console.log(a) //这行是测试的时候看打印结果的，不必须
    // 页面初始化 e为页面跳转所带来的参数
    wx.cloud.database().collection("questions").where({ //查询数据表prize下id为a所存放的id的信息
      _id:a //匹配对应的_id
    }).get({ //获取对应_id的数据
      success(res){
        //console.log(res)
     
        that.setData({ //写入数据
          qname:res.data[0].name,
          qcontent:res.data[0].content,
          qsubject:res.data[0].subject
        })
      }
    })   
  }

})