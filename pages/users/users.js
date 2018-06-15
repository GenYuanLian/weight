// pages/demo/demo.js
var app = getApp();
Page({
  onLoad: function (opt) {
    this.setData({
      users: app.globalData.selUsers
    });
  },

  data: {
    users: null
  },

  bindtap(e) {
    app.globalData.selName = e.detail.name;
    wx.navigateBack({
      url: '../plan/plan',
      delta: 1
    })
  },
  input(e){
    this.value = e.detail.value
  },
  searchMt(){
    // 当没有输入的时候，默认inputvalue 为 空字符串，因为组件 只能接受 string类型的 数据 
    if(!this.value){
      this.value = '';
    }
    this.setData({
      value:this.value
    })
  }
})