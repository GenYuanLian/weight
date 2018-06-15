//app.js
//小程序的脚本代码。我们可以在这个文件中监听并处理小程序的生命周期函数、声明全局变量。
import { getUserName, getSessionKey } from './utils/util.js';
App({
  onLaunch: function () {//当小程序初始化完成时，会触发 onLaunch（全局只触发一次）

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    });

    var that = this;
    wx.request({
      url: 'http://localhost:8080/getAllUsers',
      method: 'GET',
      success: function (res) {
        if (res.statusCode == "200") {
          that.globalData.users = res.data;
        } else {
          console.log("获取所有用户失败");
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    userName: null,
    plans: [],
    joinPlans: [],
    sponsors: [],
    joinSponsors: [],
    witnesses: [],
    joinWitnesses: [],
    users: [],
    selUsers: [],
    selName: ''
  }
})