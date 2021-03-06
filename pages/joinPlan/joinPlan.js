import { trim } from '../../utils/util.js';
import { makePy } from '../../utils/pinyinUtil.js';

const app = getApp();
Page({
  onLoad: function (options) {
    if (options.idx) { 
      this.data.itemidx = options.idx;
    }
    if (this.data.itemidx !== '') {
      var idxx = parseInt(this.data.itemidx);
      var item = app.globalData.joinPlans[idxx];
      this.setData({
        planId: item.id,
        intro: item.intro,
        idx: item.idx,
        riqi: item.riqi,
        wriqi: item.wriqi,
        executor: item.username,
        fine: item.fine,
        verifyIntro: item.verifyIntro,
        verifyPicPath: item.verifyPicPath,
        verify: item.verify == 1,
        sponsors: item.sponsors,
        witnesses: item.witnesses
      });
      for (var i = 0; i < item.sponsors.length; i++) {
        if (item.sponsors[i].confirm == 1) {
          this.setData({
            confirm: true
          });
          break;
        }
      }
      for (var i = 0; i < item.witnesses.length; i++) {
        if (item.witnesses[i].confirm == 0 || 
          item.witnesses[i].confirm == 1) {
          this.setData({
            hasWitness: true
          });
          break;
        }
      }
    } else {
      this.setData({
        executor: wx.getStorageSync('userName')
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
      '100', '101', '102', '103', '104', '105', 
      
      '106', '107', '108', '109',
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
    planId: '',
    itemidx: '',
    intro: '',
    idx: 40,
    riqi: '2018-09-01',
    wriqi: '2018-09-01',
    executor: '',
    fine: '',
    verifyIntro: '',
    verifyPicPath: '',
    verify: false,
    confirm: false,
    sponsors: [],
    witnesses: [],
    sponsorShip: '',
    hasWitness: false
  },
  bindInputSponsorShip: function (e) {
    this.setData({
      sponsorShip: e.detail.value
    })
  },
  joinSponsor: function (e) {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确认要参与计划赞助吗？',
      success: function (res) {
        if (res.confirm) {
          if (that.data.sponsorShip < 1) {
            wx.showModal({
              title: '提示',
              content: '赞助金额小于1个BSTK',
            })
          } else {
            wx.request({
              url: 'http://localhost:8080/joinSponsor',
              method: 'POST',
              data: {
                "planId": that.data.planId,
                "sponsorShip": that.data.sponsorShip
              },
              header: {
                'Session-Key': wx.getStorageSync("sessionKey")
              },
              success: function (res) {
                if (res.statusCode == "200") {
                  if (res.data == 0) {
                    app.globalData.joinPlans.splice(that.data.itemidx, 0);
                    wx.setStorageSync("joinPlans", app.globalData.joinPlans);
                    that.setData({
                      items: app.globalData.joinPlans
                    });
                    wx.navigateBack({
                      delta: 1
                    })
                  } else if (res.data == -20) {
                    wx.showModal({
                      title: '提示',
                      content: '此计划已经赞助了',
                      showCancel: false
                    })
                  } else if (res.data == -21) {
                    wx.showModal({
                      title: '提示',
                      content: '此计划已经见证了',
                      showCancel: false
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
        }
      }
    })
  },
  joinWitness: function (e) {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确认要参与计划见证吗？',
      success: function (res) {
        if (res.confirm) {
          wx.request({
            url: 'http://localhost:8080/joinWitness',
            method: 'POST',
            data: {
              "planId": that.data.planId
            },
            header: {
              'Session-Key': wx.getStorageSync("sessionKey")
            },
            success: function (res) {
              if (res.statusCode == "200") {
                if (res.data == 0) {
                  app.globalData.joinPlans.splice(that.data.itemidx, 0);
                  wx.setStorageSync("joinPlans", app.globalData.joinPlans);
                  that.setData({
                    items: app.globalData.joinPlans
                  });
                  wx.navigateBack({
                    delta: 1
                  })
                } else if (res.data == -20) {
                  wx.showModal({
                    title: '提示',
                    content: '此计划已经赞助了',
                    showCancel: false
                  })
                } else if (res.data == -21) {
                  wx.showModal({
                    title: '提示',
                    content: '此计划已经见证了',
                    showCancel: false
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
      }
    })
  }
})