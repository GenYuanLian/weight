// pages/demo/demo.js
var app = getApp();
Page({
  onLoad: function (opt) {
    this.setData({
      incomes: app.globalData.incomes
    })
  },

  data: {
    incomes: null
  },

  gotoPlan(e) {
    var index = e.currentTarget.dataset.index;
    var income = this.data.incomes[index];
    
    wx.navigateBack({
      url: '../plan/plan?idx=',
      delta: 1
    })
  }
})