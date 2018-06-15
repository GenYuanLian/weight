const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    icon: "../../images/icon_widget.png",
    hasUserName: false,
    items: [],
    joinItems: [],
    tempItems: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
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
    } else {
      this.loadSponsors();
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
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
    } else {
      this.loadSponsors();
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  syncSponsors: function (e) {
    wx.showLoading({
      title: '正在加载ing...',
    })
    wx.removeStorageSync("sponsors");
    app.globalData.sponsors = [];
    wx.removeStorageSync("joinSponsors");
    app.globalData.joinSponsors = [];
    this.setData({
      items: [],
      joinItems: [],
      tempItems: []
    })
    var that = this;
    wx.request({
      url: 'http://localhost:8080/getSponsors',
      method: 'GET',
      header: {
        'Session-Key': wx.getStorageSync("sessionKey")
      },
      success: function (res) {
        if(res.statusCode == "200") {
          that.setData({
            tempItems: res.data
          });
          that.downloadVerifyPic(0);
        } else {
          wx.hideLoading();
          wx.showToast({
            title: '加载失败',
            icon: 'none',
            duration: 2000
          });
        }
      }
    })
  },
  loadSponsors: function () {
    app.globalData.sponsors = wx.getStorageSync("sponsors");
    app.globalData.joinSponsors = wx.getStorageSync("joinSponsors");
    this.setData({
      items: app.globalData.sponsors,
      joinItems: app.globalData.joinSponsors
    })
  },
  downloadVerifyPic: function (idx) {
    if (idx >= this.data.tempItems.length) {
      wx.hideLoading();
      wx.showToast({
        title: '加载完成',
        icon: 'success',
        duration: 2000
      });
      var items = [];
      var joinItems = [];
      for (var i = 0; i < this.data.tempItems.length; i++) {
        var item = this.data.tempItems[i];
        if (item.active == 0) {
          items.push(item);
        } else if (item.active == 1) {
          joinItems.push(item);
        }
      }
      app.globalData.sponsors = items;
      app.globalData.joinSponsors = joinItems;
      wx.setStorageSync("sponsors", app.globalData.sponsors);
      wx.setStorageSync("joinSponsors", app.globalData.joinSponsors);
      this.setData({
        items: items,
        joinItems: joinItems
      });
      return;
    }
    var that = this;
    var item = this.data.tempItems[idx];
    if (item.plan.verifyPicPath !== '') {
      wx.downloadFile({
        url: 'http://localhost:8080/downloadVerifyPic?id=' + item.planId,
        success: function (res) {
          item.plan.verifyPicPath = res.tempFilePath;
          that.data.tempItems[idx] = item;
          that.downloadVerifyPic(idx + 1);
        },
        fail: function (res) {
          that.downloadVerifyPic(idx + 1);
        }
      })
    } else {
      this.downloadVerifyPic(idx + 1);
    }
  }
})