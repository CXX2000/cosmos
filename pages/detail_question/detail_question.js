// pages/detail_question/detail_question.js
Page({

  data: {
    job: [],
    like: [],
    jobList: [],
    likelist:[],
    id_1: '',
    id_2: '',
    isClick_1: false,
    isClick_2: false,
    jobStorage: [],
    likeStorage: [],
    jobId: '',
    likeId: '',
    logs: [],
  },

  Collect(e) {
    if (!this.data.isClick_1 == true) {
      let jobData = this.data.jobStorage;
      jobData.push({
        jobid: jobData.length,
        id_1: this.data.job.id_1
      })
      wx.setStorageSync('jobData', jobData);//设置缓存
      wx.showToast({
        title: '已收藏',
      });
    } else {
      wx.showToast({
        title: '已取消收藏',
      });
    }
    this.setData({
      isClick_1: !this.data.isClick_1
    })
  },

  Like(e) {
    if (!this.data.isClick_2 == true) {
      let likeData = this.data.likeStorage;
      likeData.push({
        likeid: likeData.length,
        id_2: this.data.job.id_2
      })
      wx.setStorageSync('likeData', likeData);//设置缓存
      wx.showToast({
        title: '已点赞',
      });
    } else {
      wx.showToast({
        title: '已取消点赞',
      });
    }
    this.setData({
      isClick_2: !this.data.isClick_2
    })
  },


  onTapAnswer(e){
    wx.navigateTo({
      url: '/pages/answer/answer',
  })
  }
})