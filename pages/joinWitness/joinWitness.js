const app = getApp();
Page({
  onLoad: function (options) {
    this.data.itemidx = options.idx;
    if (this.data.itemidx !== '') {
      var idxx = parseInt(this.data.itemidx);
      var item = app.globalData.joinWitnesses[idxx];
      this.setData({
        intro: item.plan.intro,
        idx: item.plan.idx,
        riqi: item.plan.riqi,
        wriqi: item.plan.wriqi,
        executor: item.plan.username,
        username: item.username,
        verifyIntro: item.plan.verifyIntro,
        verifyPicPath: item.plan.verifyPicPath,
        verify: item.plan.verify == 1,
        submit: item.plan.submit == 1,
        finish: item.plan.finish == 1,
        confirm: item.confirm == 1,
        judge: item.judge,
        sponsors: item.plan.sponsors,
        witnesses: item.plan.witnesses
      })
    }
  },
  data: {
    array: [
      '30', '31', '32', '33', '34', '35', '36', '37', '38', '39',
      '40', '41', '42', '43', '44', '45', '46', '47', '48', '49',
      '50', '51', '52', '53', '54', '55', '56', '57', '58', '59',
      '60', '61', '62', '63', '64', '65', '66', '67', '68', '69',
      '70', '71', '72', '73', '74', '75', '76', '77', '78', '79',
      '80', '81', '82', '83', '84', '85', '86', '87', '88', '89',
      '90', '91', '92', '93', '94', '95', '96', '97', '98', '99',
      '100', '101', '102', '103', '104', '105', '106', '107', '108', '109',
      '110'
    ],
    objectArray: [
      {
        id: 0,
        name: '30'
      },
      {
        id: 1,
        name: '31'
      },
      {
        id: 2,
        name: '32'
      },
      {
        id: 3,
        name: '33'
      },
      {
        id: 4,
        name: '34'
      },
      {
        id: 5,
        name: '35'
      },
      {
        id: 6,
        name: '36'
      },
      {
        id: 7,
        name: '37'
      },
      {
        id: 8,
        name: '38'
      },
      {
        id: 9,
        name: '39'
      },
      {
        id: 10,
        name: '40'
      },
      {
        id: 11,
        name: '41'
      },
      {
        id: 12,
        name: '42'
      },
      {
        id: 13,
        name: '43'
      },
      {
        id: 14,
        name: '44'
      },
      {
        id: 15,
        name: '45'
      },
      {
        id: 16,
        name: '46'
      },
      {
        id: 17,
        name: '47'
      },
      {
        id: 18,
        name: '48'
      },
      {
        id: 19,
        name: '49'
      },
      {
        id: 20,
        name: '50'
      },
      {
        id: 21,
        name: '51'
      },
      {
        id: 22,
        name: '52'
      },
      {
        id: 23,
        name: '53'
      },
      {
        id: 24,
        name: '54'
      },
      {
        id: 25,
        name: '55'
      },
      {
        id: 26,
        name: '56'
      },
      {
        id: 27,
        name: '57'
      },
      {
        id: 28,
        name: '58'
      },
      {
        id: 29,
        name: '59'
      },
      {
        id: 30,
        name: '60'
      },
      {
        id: 31,
        name: '61'
      },
      {
        id: 32,
        name: '62'
      },
      {
        id: 33,
        name: '63'
      },
      {
        id: 34,
        name: '64'
      },
      {
        id: 35,
        name: '65'
      },
      {
        id: 36,
        name: '66'
      },
      {
        id: 37,
        name: '67'
      },
      {
        id: 38,
        name: '68'
      },
      {
        id: 39,
        name: '69'
      },
      {
        id: 40,
        name: '70'
      },
      {
        id: 41,
        name: '71'
      },
      {
        id: 42,
        name: '72'
      },
      {
        id: 43,
        name: '73'
      },
      {
        id: 44,
        name: '74'
      },
      {
        id: 45,
        name: '75'
      },
      {
        id: 46,
        name: '76'
      },
      {
        id: 47,
        name: '77'
      },
      {
        id: 48,
        name: '78'
      },
      {
        id: 49,
        name: '79'
      },
      {
        id: 50,
        name: '80'
      },
      {
        id: 51,
        name: '81'
      },
      {
        id: 52,
        name: '82'
      },
      {
        id: 53,
        name: '83'
      },
      {
        id: 54,
        name: '84'
      },
      {
        id: 55,
        name: '85'
      },
      {
        id: 56,
        name: '86'
      },
      {
        id: 57,
        name: '87'
      },
      {
        id: 58,
        name: '88'
      },
      {
        id: 59,
        name: '89'
      },
      {
        id: 60,
        name: '90'
      },
      {
        id: 61,
        name: '91'
      },
      {
        id: 62,
        name: '92'
      },
      {
        id: 63,
        name: '93'
      },
      {
        id: 64,
        name: '94'
      },
      {
        id: 65,
        name: '95'
      },
      {
        id: 66,
        name: '96'
      },
      {
        id: 67,
        name: '97'
      },
      {
        id: 68,
        name: '98'
      },
      {
        id: 69,
        name: '99'
      },
      {
        id: 70,
        name: '100'
      },
      {
        id: 71,
        name: '101'
      },
      {
        id: 72,
        name: '102'
      },
      {
        id: 73,
        name: '103'
      },
      {
        id: 74,
        name: '104'
      },
      {
        id: 75,
        name: '105'
      },
      {
        id: 76,
        name: '106'
      },
      {
        id: 77,
        name: '107'
      },
      {
        id: 78,
        name: '108'
      },
      {
        id: 79,
        name: '109'
      },
      {
        id: 80,
        name: '110'
      }
    ],
    itemidx: '',
    intro: '',
    idx: 40,
    riqi: '2018-09-01',
    wriqi: '2018-09-01',
    executor: '',
    username: '',
    verifyIntro: '',
    verifyPicPath: '',
    verify: false,
    submit: false,
    finish: false,
    confirm: false,
    judge: 0,
    sponsors: [],
    witnesses: []
  },
  passWitness: function (e) {
    if (!this.data.verify) {
      wx.showModal({
        title: '提示',
        content: '执行人还没有上传验证数据',
        showCancel: false
      });
      return;
    }
    var that = this;
    var item = app.globalData.witnesses[this.data.itemidx];
    wx.showModal({
      title: '确认',
      content: '确认是否通过执行人的目标计划？',
      confirmText: "确认",
      cancelText: "取消",
      success: function (res) {
        if (res.confirm) {
          item.judge = 1;
          wx.request({
            url: 'http://localhost:8080/judgeWitness?id=' + item.id + "&judge=1",
            method: 'GET',
            success: res => {
              if (res.statusCode == 200) {
                if (res.data == 0) {
                  wx.showToast({
                    title: '通过见证计划成功',
                    icon: 'success'
                  });
                  var witnesses = item.plan.witnesses;
                  for (var i = 0; i < witnesses.length; i++) {
                    if (witnesses[i].username == that.data.username) {
                      witnesses[i].judge = 1;
                      break;
                    }
                  }
                  item.plan.witnesses = witnesses;
                  app.globalData.witnesses[that.data.itemidx] = item;
                  wx.setStorageSync('witnesses', app.globalData.witnesses);
                  wx.navigateBack({
                    delta: 1
                  })
                } else if (res.data == -7) {
                  wx.showModal({
                    title: '出错',
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
        }
      },
      fail: function (res) {

      }
    });
  },
  notPassWitness: function (e) {
    if (!this.data.verify) {
      wx.showModal({
        title: '提示',
        content: '执行人还没有上传验证数据',
        showCancel: false
      });
      return;
    }
    var that = this;
    var item = app.globalData.witnesses[this.data.itemidx];
    wx.showModal({
      title: '确认',
      content: '确认是否不通过执行人的目标计划？',
      confirmText: "确认",
      cancelText: "取消",
      success: function (res) {
        if (res.confirm) {
          item.judge = 2;
          wx.request({
            url: 'http://localhost:8080/judgeWitness?id=' + item.id + "&judge=2",
            method: 'GET',
            success: res => {
              if (res.statusCode == 200) {
                if (res.data == 0) {
                  wx.showToast({
                    title: '通过见证计划成功',
                    icon: 'success'
                  });
                  var witnesses = item.plan.witnesses;
                  for (var i = 0; i < witnesses.length; i++) {
                    if (witnesses[i].username == that.data.username) {
                      witnesses[i].judge = 2;
                      break;
                    }
                  }
                  item.plan.witnesses = witnesses;
                  app.globalData.witnesses[that.data.itemidx] = item;
                  wx.setStorageSync('witnesses', app.globalData.witnesses);
                  wx.navigateBack({
                    delta: 1
                  })
                } else if (res.data == -7) {
                  wx.showModal({
                    title: '出错',
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
        }
      },
      fail: function (res) {

      }
    });
  }
})