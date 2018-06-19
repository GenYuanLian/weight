import { trim } from '../../utils/util.js';
import { makePy } from '../../utils/pinyinUtil.js';
import { $wuxDialog } from '../../components/wux'

const app = getApp();
Page({
  onLoad: function (options) {
    if (options.idx) { 
      this.data.itemidx = options.idx;
    }
    if (this.data.itemidx !== '') {
      var idxx = parseInt(this.data.itemidx);
      var item = app.globalData.plans[idxx];
      this.setData({
        intro: item.intro,
        idx: item.idx,
        riqi: item.riqi,
        wriqi: item.wriqi,
        executor: item.username,
        fine: item.fine,
        verifyIntro: item.verifyIntro,
        verifyPicPath: item.verifyPicPath,
        join: item.join == 1,
        submit: item.submit == 1,
        finish: item.finish == 1,
        added: false,
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
        if (item.witnesses[i].judge != 0) {
          this.setData({
            judge: true
          });
          break;
        }
      }
      for (var i = 0; i < item.sponsors.length; i++) {
        if (item.sponsors[i].confirm == 0 || item.sponsors[i]
          .confirm == 1) {
          this.setData({
            hasSponsor: true
          });
          break;
        }
      }
      for (var i = 0; i < item.witnesses.length; i++) {
        if (item.witnesses[i].confirm == 0 || item.witnesses[i]
          .confirm == 1) {
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
  onShow: function (e) {
    if (app.globalData.selName !== '') {
      var sponsors = this.data.sponsors;
      var witnesses = this.data.witnesses;
      var userType = this.data.userType;
      var userIdx = this.data.userIdx;
      if (userType == 1) {
        sponsors[userIdx].username = app.globalData.selName;
      } else if (userType == 2) {
        witnesses[userIdx].username = app.globalData.selName;
      }
      this.setData({
        sponsors: sponsors,
        witnesses: witnesses
      });
      app.globalData.selName = '';
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
    itemidx: '',
    intro: '',
    idx: 40,
    riqi: '2018-09-01',
    wriqi: '2018-09-01',
    executor: '',
    fine: '',
    verifyIntro: '',
    verifyPicPath: '',
    join: false,
    submit: false,
    finish: false,
    added: true,
    confirm: false,
    judge: false,
    startX: 0,
    sponsors: [
      {
        "username": "",
        "sponsorShip": '',
        "confirm": 0
      }
    ],
    witnesses: [
      {
        "username": "",
        "confirm": 0,
        "judge": 0
      }
    ],
    userIdx: 0,
    userType: 1,
    hasSponsor: false,
    hasWitness: false
  },
  bindInputIntro: function (e) {
    this.setData({
      intro: e.detail.value
    })
  },
  bindWeightChange: function (e) {
    this.setData({
      idx: e.detail.value
    })
  },
  bindDateChange: function (e) {
    this.setData({
      riqi: e.detail.value
    })
  },
  bindWDateChange: function (e) {
    this.setData({
      wriqi: e.detail.value
    })
  },
  bindInputFine: function (e) {
    this.setData({
      fine: e.detail.value
    })
  },
  bindInputSponsor: function (e) {
    var index = e.currentTarget.dataset.index;
    var sponsors = this.data.sponsors;
    sponsors[index].username = e.detail.value;
    this.setData({
      sponsors: sponsors
    })
  },
  bindInputSponsorShip: function (e) {
    var index = e.currentTarget.dataset.index;
    var sponsors = this.data.sponsors;
    sponsors[index].sponsorShip = e.detail.value;
    this.setData({
      sponsors: sponsors
    })
  },
  bindInputWitness: function (e) {
    var index = e.currentTarget.dataset.index;
    var witnesses = this.data.witnesses;
    witnesses[index].username = e.detail.value;
    this.setData({
      witnesses: witnesses  
    })
  },
  bindInputVerifyIntro: function (e) {
    this.setData({
      verifyIntro: e.detail.value
    })
  },
  savePlan: function (e) {
    if (!this.isValidData()) {
      wx.showModal({
        title: '出错',
        content: '输入数据不能为空，金额大于等于1',
        showCancel: false
      });
      return;
    }
    
    if (this.hasDupliUser()) {
      wx.showModal({
        title: '出错',
        content: '输入用户名不能相同',
        showCancel: false
      });
      return;
    }

    if (!this.isValidDate()) {
      wx.showModal({
        title: '出错',
        content: '日期数据设置不合理',
        showCancel: false
      });
      return;
    }

    var item;
    if(this.data.added) {
      item = new Object();
    } else {
      item = app.globalData.plans[this.data.itemidx];
    }
    item.intro = this.data.intro;
    item.idx = this.data.idx;
    item.riqi = this.data.riqi;
    item.wriqi = this.data.wriqi;
    item.fine = this.data.fine;
    item.verifyIntro = this.data.verifyIntro;
    item.verifyPicPath = this.data.verifyPicPath;
    item.sponsors = this.data.sponsors;
    item.witnesses = this.data.witnesses;
    var that = this;
    if (this.data.added) {
      wx.request({
        url: 'http://localhost:8080/insertPlan',
        method: 'POST',
        data: {
          username: wx.getStorageSync("userName"),
          sessionKey: wx.getStorageSync("sessionKey"),
          intro: item.intro,
          idx: item.idx,
          riqi: item.riqi,
          wriqi: item.wriqi,
          fine: item.fine,
          sponsors: item.sponsors,
          witnesses: item.witnesses,
          verifyIntro: item.verifyIntro,
          verifyPicPath: item.verifyPicPath
        },
        header: {
          'content-type': 'application/json'
        },
        success: res => {
          if (res.statusCode == 200) {
            if (res.data.status == 0) {
              wx.showToast({
                title: '新增计划成功',
                icon: 'success'
              });
              item.id = res.data.id;
              app.globalData.plans.push(item);
              wx.setStorageSync('plans', 
                app.globalData.plans);
              wx.navigateBack({
                delta: 1
              });
            } else if (res.data.status == -9) {
              wx.showModal({
                title: '用户不存在',
                content: res.data.message,
                showCancel: false
              })
            } else if (res.data.status == -12) {
              wx.showModal({
                title: '用户余额不足',
                content: res.data.message,
                showCancel: false
              })
            } else if (res.data.status == -7) {
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
    } else {
      if (!this.data.hasSponsor || !this.data.hasWitness) {
        wx.showModal({
          title: '提示',
          content: '没有赞助人或者见证人',
          showCancel: false
        });
        return;
      }
      wx.request({
        url: 'http://localhost:8080/updatePlan',
        method: 'POST',
        data: {
          id: item.id,
          username: wx.getStorageSync("userName"),
          sessionKey: wx.getStorageSync("sessionKey"),
          intro: item.intro,
          idx: item.idx,
          riqi: item.riqi,
          wriqi: item.wriqi,
          fine: item.fine,
          sponsors: item.sponsors,
          witnesses: item.witnesses,
          verifyIntro: item.verifyIntro
        },
        header: {
          'content-type': 'application/json',
        },
        success: res => {
          if (res.statusCode == 200) {
            if (res.data.status == 0) {
              wx.showToast({
                title: '修改计划成功',
                icon: 'success'
              });
              var status = that.uploadVerifyPic(item.id);
              if (status == 0) {
                item.verifyPicPath = that.data.verifyPicPath;
                app.globalData.plans[that.data.itemidx] = item;
                wx.setStorageSync('plans',
                  app.globalData.plans);
                wx.navigateBack({
                  delta: 1
                });
              } else if (status == -7) {
                wx.showModal({
                  title: '出错',
                  content: '遇到系统异常',
                  showCancel: false
                })
              } else if (status == -18) {
                wx.showModal({
                  title: '出错',
                  content: '已经有见证人做出评判，不能上传验证图片',
                  showCancel: false
                })
              } else {
                wx.showModal({
                  title: '出错',
                  content: '上传验证图片异常',
                  showCancel: false
                })
              }
            } else if (res.data.status == -7) {
              wx.showModal({
                title: '出错',
                content: '遇到系统异常',
                showCancel: false
              })
            } else if (res.data.status == -22) {
              wx.showModal({
                title: '提示',
                content: res.data.message,
                showCancel: false
              })
            } else {
              wx.showModal({
                title: '提示',
                content: res.data.message,
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
      });
    }
  },
  uploadVerifyPic: function (id) {
    var that = this;
    if (this.data.verifyPicPath.length > 0) {
      wx.uploadFile({
        url: 'http://localhost:8080/uploadVerifyPic',
        filePath: that.data.verifyPicPath,
        name: 'file',
        formData: {
          "id": id,
          "verifyIntro": that.data.verifyIntro
        },
        success: function (res) {
          return res.data;
        },
        fail: function (res) {
          return -1;
        },
        complete: function (res) {
        }
      })
    }
    return 0;
  },
  submitPlan: function (e) {
    if (!this.isValidData()) {
      wx.showModal({
        title: '出错',
        content: '输入数据不能为空，金额大于等于1',
        showCancel: false
      });
      return;
    }
    var that = this;
    wx.showModal({
      title: '提交记录',
      content: '提交记录会花费代币，确认要提交吗？',
      success: function(res) {
        var item = app.globalData.plans[that.data.itemidx];
        item.submit = 1;
        wx.request({
          url: 'http://localhost:8080/submitPlan?id=' + item.id,
          method: 'GET',
          success: function (res) {
            if (res.statusCode == "200") {
              if (res.data.status == 0) {
                wx.showToast({
                  title: '提交计划成功',
                  icon: 'success'
                }),
                app.globalData.plans[that.data.itemidx] = item;
                wx.setStorageSync('plans',
                  app.globalData.plans);
                wx.navigateBack({
                  delta: 1
                });
              } else if (res.data.status == -7) {
                wx.showModal({
                  title: '出错',
                  content: '遇到系统异常',
                  showCancel: false,
                })
              } else {
                wx.showModal({
                  title: '提示',
                  content: res.data.message,
                  showCancel: false,
                })
              }
            } else {
              wx.showModal({
                title: '提示',
                content: '服务器出小差了，请重试',
                showCancel: false,
              })
            }
          }
        })
      }
    });
  },
  deletePlan: function (e) {
    var that = this;
    wx.showModal({
      title: '删除',
      content: '确认要删除计划吗？',
      success: function (res) {
        if (res.confirm) {
          var item = app.globalData.plans[that.data.itemidx];
          wx.request({
            url: 'http://localhost:8080/deletePlan?id=' + item.id,
            method: 'GET',
            success: function (res) {
              if (res.statusCode == "200") {
                if (res.data == 0) {
                  wx.showToast({
                    title: '删除记录成功',
                    icon: 'success'
                  }),
                    app.globalData.plans.splice(that.data.itemidx, 1);
                  wx.setStorageSync('plans',
                    app.globalData.plans);
                  wx.navigateBack({
                    delta: 1
                  });
                } else if (res.data == -7) {
                  wx.showModal({
                    title: '出错',
                    content: '遇到系统异常',
                    showCancel: false,
                  })
                } else if (res.data == -17) {
                  wx.showModal({
                    title: '出错',
                    content: '有赞助人已经同意了计划，不能删除',
                    showCancel: false,
                  })
                }
              } else {
                wx.showModal({
                  title: '提示',
                  content: '服务器出小差了，请重试',
                  showCancel: false,
                })
              }
            }
          })
        }
      }
    });
  },
  verifyPlan: function (e) {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        that.setData({
          verifyPicPath: res.tempFilePaths[0]
        })
      }
    })
  },
  isValidData: function () {
    if (this.data.intro.replace(/(^\s*)|(\s*$)/g, "").length == 0 ||
      this.data.fine < 1) {
      return false;  
    }
    var sponsors = this.data.sponsors;
    var witnesses = this.data.witnesses;

    for (var i = 0; i < sponsors.length; i++) {
      var username = sponsors[i].username;
      var sponsorShip = sponsors[i].sponsorShip;
      if (username.replace(/(^\s*)|(\s*$)/g, "").length == 0 || 
        sponsorShip < 1) {
        return false;
      }
    }
    for (var i = 0; i < witnesses.length; i++) {
      var username = witnesses[i].username;
      if (username.replace(/(^\s*)|(\s*$)/g, "").length == 0) {
        return false;
      }
    }
    return true;
  },
  hasDupliUser: function () {
    var sponsors = this.data.sponsors;
    var witnesses = this.data.witnesses;
    for (var i = 0; i < sponsors.length - 1; i++) {
      for (var j = i+1; j < sponsors.length; j++) {
        var a = sponsors[i].username;
        var b = sponsors[j].username;
        if (a == b) {
          return true;
        }
      }
    }
    for (var i = 0; i < witnesses.length - 1; i++) {
      for (var j = i + 1; j < witnesses.length; j++) {
        var a = witnesses[i].username;
        var b = witnesses[j].username;
        if (a == b) {
          return true;
        }
      }
    }
    for (var i = 0; i < sponsors.length; i++) {
      for (var j = 0; j < witnesses.length; j++) {
        var a = sponsors[i].username;
        var b = witnesses[j].username;
        if (a == b) {
          return true;
        }
      }
    }
    return false;
  },
  touchSS: function (e) {
    if (e.touches.length == 1) {
      var sponsors = this.data.sponsors;
      if (sponsors) {
        for (var i = 0; i < sponsors.length; i++) {
          sponsors[i].xd = "";
          sponsors[i].move = "";
        }
      }
      this.setData({
        startX: e.touches[0].clientX,
      });
    } else {
      return false;
    }
  },
  touchSM: function (e) {
    var xd = '', gj = '', move = '';
    if (e.touches.length == 1) {
      var moveX = e.touches[0].clientX;
      var disX = this.data.startX - moveX;
      if (100 > disX > 0) {
        xd = disX + "px";
        move = "-" + disX + "px";
      } else if (disX > 100) {
        xd = 100 + "px";
        move = "-" + 100 + "px";
      } else {
        xd = "0px";
        move = "0px";
      }
      var index = e.currentTarget.dataset.index;
      var sponsors = this.data.sponsors;
      sponsors[index].xd = xd;
      sponsors[index].move = move;
      this.setData({
        sponsors: sponsors
      });
    }
  },
  touchSE: function (e) {
    var xd = '', move = '';
    if (e.changedTouches.length == 1) {
      var endX = e.changedTouches[0].clientX;
      var disX = this.data.startX - endX;
      if (disX > 0) {
        xd = 100 + "px";
        move = "-" + 100 + "px";
      } else if (disX <= 0) {
        xd = "0px";
        move = "0px";
      }
      var index = e.currentTarget.dataset.index;
      var sponsors = this.data.sponsors;
      sponsors[index].xd = xd;
      sponsors[index].move = move;
      this.setData({
        sponsors: sponsors
      });
    }
  },
  removeSponsor: function (e) {
    var index = e.currentTarget.dataset.index;
    var sponsors = this.data.sponsors;
    sponsors.splice(index, 1);
    this.setData({
      sponsors: sponsors
    });
  },
  touchWS: function (e) {
    if (e.touches.length == 1) {
      var witnesses = this.data.witnesses;
      if (witnesses) {
        for (var i = 0; i < witnesses.length; i++) {
          witnesses[i].xd = "";
          witnesses[i].move = "";
        }
      }
      const startTime = Date.now();
      this.setData({
        startX: e.touches[0].clientX,
      });
    } else {
      return false;
    }
  },
  touchWM: function (e) {
    var xd = '', gj = '', move = '';
    if (e.touches.length == 1) {
      var moveX = e.touches[0].clientX;
      var disX = this.data.startX - moveX;
      if (100 > disX > 0) {
        xd = disX + "px";
        move = "-" + disX + "px";
      } else if (disX > 100) {
        xd = 100 + "px";
        move = "-" + 100 + "px";
      } else {
        xd = "0px";
        move = "0px";
      }
      var index = e.currentTarget.dataset.index;
      var witnesses = this.data.witnesses;
      witnesses[index].xd = xd;
      witnesses[index].move = move;
      this.setData({
        witnesses: witnesses
      });
    }
  },
  touchWE: function (e) {
    var xd = '', move = '';
    if (e.changedTouches.length == 1) {
      var endX = e.changedTouches[0].clientX;
      var disX = this.data.startX - endX;
      if (disX > 0) {
        xd = 100 + "px";
        move = "-" + 100 + "px";
      } else if (disX <= 0) {
        xd = "0px";
        move = "0px";
      }
      var index = e.currentTarget.dataset.index;
      var witnesses = this.data.witnesses;
      witnesses[index].xd = xd;
      witnesses[index].move = move;
      this.setData({
        witnesses: witnesses
      });
    }
  },
  removeWitness: function (e) {
    var index = e.currentTarget.dataset.index;
    var witnesses = this.data.witnesses;
    witnesses.splice(index, 1);
    this.setData({
      witnesses: witnesses
    });
  },
  addWitness: function (e) {
    var witness = {
      "username": "",
      "confirm": 0,
      "judge": 0,
      "active": 0
    };
    var witnesses = this.data.witnesses;
    witnesses.push(witness);
    this.setData({
      witnesses: witnesses
    });
  },
  addSponsor: function (e) {
    var sponsor = {
      "username": "",
      "sponsorShip": 1,
      "confirm": 0,
      "active": 0
    };
    var sponsors = this.data.sponsors;
    sponsors.push(sponsor);
    this.setData({
      sponsors: sponsors
    });
  },
  isValidDate: function (e) {
    var curDate = new Date();
    var year = curDate.getFullYear();
    var month = curDate.getMonth();
    var day = curDate.getDate();
    var monthStr = (month+1)<10 ? "0"+(month+1) : (month+1);
    var dayStr = day<10 ? "0"+day : day;
    var curDay = year + "-" + monthStr + "-" + dayStr;
    if (curDay > this.data.riqi || this.data.riqi > this.data.wriqi) {
      return false;
    }
    return true;
  },
  selSponsor: function (e) {
    this.sortOutUsers();
    var useridx = e.currentTarget.dataset.index;
    this.setData({
      userIdx: useridx,
      userType: 1 
    });
    wx.navigateTo({
      url: '../users/users',
    });
  },
  selWitness: function (e) {
    this.sortOutUsers();
    var useridx = e.currentTarget.dataset.index;
    this.setData({
      userIdx: useridx,
      userType: 2
    });
    wx.navigateTo({
      url: '../users/users'
    })
  },
  sortOutUsers: function (e) {
    var users = app.globalData.users;
    var sponsors = this.data.sponsors;
    var witnesses = this.data.witnesses;
    var items = [];
    var exist;
    for (var i = 0; i < users.length; i++) {
      exist = false;
      for (var j = 0; j < sponsors.length; j++) {
        if (users[i].username == sponsors[j].username) {
          exist = true;
          break;
        }
      }
      for (var j = 0; j < witnesses.length; j++) {
        if (users[i].username == witnesses[j].username) {
          exist = true;
          break;
        }
      }
      if (users[i].username == this.data.executor) {
        exist = true;
      }
      if (!exist) {
        items.push(users[i]);
      }
    }
    var aa = [];
    var bb;
    var cc;
    var n1 = "A".charCodeAt(0);
    for (var i = 0; i < items.length; i++) {
      var s1 = makePy(items[i].username)[0];
      var s2 = s1.substr(0, 1).toUpperCase();
      var s3 = s1.toUpperCase();
      var n2 = s2.charCodeAt(0);
      cc = {};
      cc.name = items[i].username;
      cc.key = s2;
      if (aa[n2]) {
        bb = aa[n2];
        for (var j = 0; j < bb.item.length; j++) {
          var dd = makePy(bb.item[j].name)[0];
          if (s3 <= dd) {
            bb.item.splice(j, 0, cc);
            aa[n2] = bb;
            break;
          }
        }
      } else {
        bb = {};
        bb.title = s2;
        bb.item = [];
        bb.item.push(cc);
        aa[n2] = bb;
      }
    }
    app.globalData.selUsers = [];
    for (var i = 0; i < aa.length; i++) {
      if (aa[i]) {
        app.globalData.selUsers.push(aa[i]);
      }
    }
  },
  confirmSponsor: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    var item = this.data.sponsors[index];
    item.confirm = 0;
    $wuxDialog.open({
      title: '赞助计划',
      content: '确认是否赞助执行人的目标规划？',
      buttons: [
        {
          text: '同意',
          type: 'weui-dialog__btn--primary',
          onTap(e) {
            item.confirm = 1;
            wx.request({
              url: 'http://localhost:8080/confirmSponsor?id=' + item.id +
              "&confirm=1",
              method: 'GET',
              success: res => {
                if (res.statusCode == 200) {
                  if (res.data == 0) {
                    wx.showToast({
                      title: '同意赞助计划',
                      icon: 'success'
                    });
                    that.data.sponsors[index] = item;
                    app.globalData.sponsors = that.data.sponsors;
                    wx.setStorageSync("sponsors", app.globalData.sponsors);
                    wx.navigateBack({
                      delta: 1
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
        },
        {
          text: '不同意',
          type: 'weui-dialog__btn--primary',
          onTap(e) {
            item.confirm = 2;
            wx.request({
              url: 'http://localhost:8080/confirmSponsor?id=' + item.id +
              "&confirm=2",
              method: 'GET',
              success: res => {
                if (res.statusCode == 200) {
                  if (res.data == 0) {
                    wx.showToast({
                      title: '不同意赞助计划',
                      icon: 'success'
                    });
                    that.data.sponsors[index] = item;
                    app.globalData.plans[that.data.itemidx].sponsors = that.data.sponsors;
                    wx.setStorageSync("plans", app.globalData.plans);
                    wx.navigateBack({
                      delta: 1
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
        },
        {
          text: '取消',
        },
      ],
    })
  },
  confirmWitness: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    var item = this.data.witnesses[index];
    item.confirm = 0;
    $wuxDialog.open({
      title: '见证计划',
      content: '确认是否见证执行人的目标规划？',
      buttons: [
        {
          text: '同意',
          type: 'weui-dialog__btn--primary',
          onTap(e) {
            item.confirm = 1;
            wx.request({
              url: 'http://localhost:8080/confirmWitness?id=' + item.id +
              "&confirm=1",
              method: 'GET',
              success: res => {
                if (res.statusCode == 200) {
                  if (res.data == 0) {
                    wx.showToast({
                      title: '同意见证计划',
                      icon: 'success'
                    });
                    that.data.witnesses[index] = item;
                    app.globalData.plans[that.data.itemidx].witnesses = that.data.witnesses;
                    wx.setStorageSync("plans", app.globalData.plans);
                    wx.navigateBack({
                      delta: 1
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
        },
        {
          text: '不同意',
          type: 'weui-dialog__btn--primary',
          onTap(e) {
            item.confirm = 2;
            wx.request({
              url: 'http://localhost:8080/confirmWitness?id=' + item.id +
              "&confirm=2",
              method: 'GET',
              success: res => {
                if (res.statusCode == 200) {
                  if (res.data == 0) {
                    wx.showToast({
                      title: '不同意见证计划',
                      icon: 'success'
                    });
                    that.data.witnesses[index] = item;
                    app.globalData.witnesses = that.data.witnesses;
                    wx.setStorageSync("witnesses", app.globalData.witnesses);
                    wx.navigateBack({
                      delta: 1
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
        },
        {
          text: '取消',
        },
      ],
    })
  }
})