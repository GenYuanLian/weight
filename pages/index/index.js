//index.js
//获取应用实例
import { getUserName } from '../../utils/util.js';
const app = getApp()

Page({
  data: {
    names: [],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    hasUserName: false,//姓名是否绑定标志
    userName: null
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    if (this.data.userName != null) {
      this.setData({
        hasUserName: true
      })
    } else if (wx.getStorageSync("userName") && wx.getStorageSync("userName") != "") {//如果缓存中有值且不为空，直接读取
      this.setData({
        userName: wx.getStorageSync("userName"),
        hasUserName: true
      })
    } else {//缓存中没值，则延时2000毫秒之后继续从缓存中读取
      var that = this
      setTimeout(function tmp() {
        if (wx.getStorageSync("userName") && wx.getStorageSync("userName") != "") {
          that.setData({
            userName: wx.getStorageSync("userName"),
            hasUserName: true
          })
        }
      }, 2000)
    }
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShow() {
    //获取用户真实姓名
    if (wx.getStorageSync("userName") && wx.getStorageSync("userName") != "") {
      this.setData({
        userName: wx.getStorageSync("userName"),
        hasUserName: true
      })
    } else {
      this.setData({
        userName: null,
        hasUserName: false 
      })
    }
    if (!this.data.hasUserName) {
      wx.navigateTo({
        url: '../login/login',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }
  },
  onShareAppMessage() {
    return {
      title: '源链之家',
      desc: '目标管理',
      path: 'pages/index/index'
    };
  },
})
