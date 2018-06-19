const app = getApp();
var QR = require("../../utils/qrcode.js");
import { empty, trim } from "../../utils/util.js";
Page({
  onLoad: function (options) {
    if (wx.getStorageSync("userName") && wx.getStorageSync("userName") != "") {
      this.setData({
        hasUserName: true
      })
    }
    if (!this.data.hasUserName) {
      wx.showModal({
        title: '提示',
        content: '您还没有绑定姓名，请先在首页绑定姓名',
        showCancel: false,
        //点击确认按钮跳转至主页
        success: res => {
          wx.switchTab({
            url: '../index/index',
          })
        },
        fail: res => {
        }
      })
    }
    this.setCanvasSize();//动态设置画布大小
  },
  onShow: function () {
    if (wx.getStorageSync("userName") && wx.getStorageSync("userName") != "") {
      this.setData({
        hasUserName: true
      })
    }
    if (!this.data.hasUserName) {
      wx.showModal({
        title: '提示',
        content: '您还没有绑定姓名，请先在首页绑定姓名',
        showCancel: false,
        //点击确认按钮跳转至主页
        success: res => {
          wx.switchTab({
            url: '../index/index',
          })
        },
        fail: res => {
        }
      })
    }
    this.setCanvasSize();//动态设置画布大小
    if (empty(this.data.pubAddr)) {
      this.checkPubAddr();
    } else if (empty(this.data.imagePath)) {
      this.genQrCode();
    }
  },
  data: {
    totalBalance: '',
    availableBalance: '',
    pubAddr: '',
    canvasHidden: false,
    maskHidden: true,
    imagePath: '',
    hasUserName: false,
    withDrawAddr: '',
    amount: '',
    income: ''
  },
  checkBalance: function (e) {
    var that = this;
    wx.request({
      url: 'http://localhost:8080/checkBalance',
      method: 'GET',
      header: {
        'Session-Key': wx.getStorageSync("sessionKey")
      },
      success: function (res) {
        if (res.statusCode == "200") {
          if (res.data.status == 0) {
            that.setData({
              totalBalance: res.data.totalBalance,
              availableBalance: res.data.availableBalance
            });
            wx.showToast({
              title: '查询成功',
              icon: 'success',
              duration: 2000
            });
          } 
        } else {
          wx.showModal({
            title: '提示',
            content: '服务器出小差了，请重试',
            showCancel: false
          })
        }
      }
    })
  },
  checkIncome: function (e) {
    var that = this;
    wx.request({
      url: 'http://localhost:8080/checkIncome',
      method: 'GET',
      header: {
        'Session-Key': wx.getStorageSync("sessionKey")
      },
      success: function (res) {
        if (res.statusCode == "200") {
          if (res.data.status == 0) {
            that.setData({
              income: res.data.income
            });
            app.globalData.incomes = res.data.incomes;
            wx.showToast({
              title: '查询成功',
              icon: 'success',
              duration: 2000
            });
          } else if (res.data.status == -7) {
            wx.showModal({
              title: '提示',
              content: '遇到系统异常',
              showCancel: false
            })
          }
        } else {
          wx.showModal({
            title: '提示',
            content: '服务器出小差了，请重试',
            showCancel: false
          })
        }
      }
    })
  },
  checkPubAddr: function (e) {
    var that = this;
    wx.request({
      url: 'http://localhost:8080/checkPubAddr',
      method: 'GET',
      header: {
        'Session-Key': wx.getStorageSync("sessionKey")
      },
      success: function (res) {
        if (res.statusCode == "200") {
          if (res.data.status == 0) {
            that.setData({
              pubAddr: res.data.pubAddr
            });
            that.genQrCode();
          }
        }
      }
    })
  },
  withDraw: function (e) {
    if (empty(this.data.withDrawAddr)) {
      wx.showModal({
        title: '错误',
        content: '提现地址不能为空',
      })
      return;
    }
    if (this.data.amount <= 0) {
      wx.showModal({
        title: '错误',
        content: '提现金额不能为空',
      });
      return;
    }
    var that = this;
    wx.request({
      url: 'http://localhost:8080/withDraw',
      method: 'POST',
      data: {
        addr: this.data.withDrawAddr,
        amount: this.data.amount
      },
      header: {
        'Session-Key': wx.getStorageSync("sessionKey")
      },
      success: function (res) {
        if (res.statusCode == "200") {
          if (res.data.status == 0) {
            wx.showToast({
              title: '提现成功',
              icon: 'success'
            }) 
          } else if (res.data.status == -19) {
            wx.showToast({
              title: '提现失败',
              icon: 'none'
            })
          } else if (res.data.status == -7) {
            wx.showModal({
              title: '提示',
              content: '遇到系统异常',
              showCancel: false
            })
          }
        } else {
          wx.showModal({
            title: '提示',
            content: '服务器出小差了，请重试',
            showCancel: false
          })
        }
      }
    })
  },
  previewImg: function (e) {
    var img = this.data.imagePath;
    wx.previewImage({
      current: img, // 当前显示图片的http链接
      urls: [img] // 需要预览的图片http链接列表
    })
  },
  genQrCode: function (e) {
    if (empty(this.data.pubAddr)) {
      wx.showToast({
        title: '先获取钱包地址'
      })
      return;
    }
    var that = this;
    that.setData({
      maskHidden: false,
    });
    wx.showToast({
      title: '生成中...',
      icon: 'loading',
      duration: 2000
    });
    var st = setTimeout(function () {
      wx.hideToast()
      var size = that.setCanvasSize();
      //绘制二维码
      that.createQrCode(that.data.pubAddr, "mycanvas", size.w, size.h);
      that.setData({
        maskHidden: true
      });
      clearTimeout(st);
    }, 2000)
  },
  createQrCode: function (url, canvasId, cavW, cavH) {
    QR.api.draw(url, canvasId, cavW, cavH);
    setTimeout(() => { this.canvasToTempImage(); }, 1000);
  },
  canvasToTempImage: function () {
    var that = this;
    wx.canvasToTempFilePath({
      canvasId: 'mycanvas',
      success: function (res) {
        var tempFilePath = res.tempFilePath;
        that.setData({
          imagePath: tempFilePath,
        });
      },
      fail: function (res) {
      }
    });
  },
  //适配不同屏幕大小的canvas
  setCanvasSize: function () {
    var size = {};
    try {
      var res = wx.getSystemInfoSync();
      var scale = 750 / 686;//不同屏幕下canvas的适配比例；设计稿是750宽
      var width = res.windowWidth / scale;
      var height = width;//canvas画布为正方形
      size.w = width;
      size.h = height;
    } catch (e) {
      // Do something when catch error
    }
    return size;
  },
  logout: function (e) {
    var that = this;
    wx.showModal({
      title: '退出',
      content: '确认要退出登录吗？',
      success: function (res) {
        if (res.confirm) {
          wx.setStorageSync('userName', '');
          wx.setStorageSync('sessionKey', '');
          app.globalData.plans = [];
          app.globalData.sponsors = [];
          app.globalData.witnesses = [];
          app.globalData.userInfo = null;
          app.globalData.userName = null;
          that.setData({
            totalBalance: '',
            availableBalance: '',
            pubAddr: '',
            canvasHidden: false,
            maskHidden: true,
            imagePath: '',
            hasUserName: false,
            withDrawAddr: '',
            amount: ''
          });
          wx.switchTab({
            url: '../index/index',
          })
        }
      }
    })
  },
  inputWithDrawAddr: function (e) {
    this.setData({
      withDrawAddr: trim(e.detail.value)
    })
  },
  inputAmount: function (e) {
    this.setData({
      amount: trim(e.detail.value)
    })
  },
  getIncomes: function (e) {
    wx.navigateTo({
      url: '../incomes/incomes'
    })
  }
})