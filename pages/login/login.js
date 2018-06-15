var util = require("../../utils/util.js");

import { trim } from '../../utils/util.js';

Page({
  data:{
    loginBtnTxt:"登录",
    loginBtnBgBgColor:"#ff9900",
    btnLoading:false,
    disabled:false,
    inputUserName: '',
    inputPassword: '',
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    
  },
  onReady:function(){
    // 页面渲染完成
    
  },
  onShow:function(){
    // 页面显示
    
  },
  onHide:function(){
    // 页面隐藏
    
  },
  onUnload:function(){
    // 页面关闭
    
  },
  formSubmit:function(e){
    var param = e.detail.value;
    this.mysubmit(param);
  },
  mysubmit:function (param){
    var flag = this.checkUserName(param)&&this.checkPassword(param)
    if(flag){
        this.setLoginData1();
        this.checkUserInfo(param);
    } 
  },
  setLoginData1: function () {
    this.setData({
      loginBtnTxt: "登录中",
      disabled: !this.data.disabled,
      loginBtnBgBgColor: "#999",
      btnLoading: !this.data.btnLoading
    });
  },
  setLoginData2: function () {
    this.setData({
      loginBtnTxt: "登录",
      disabled: !this.data.disabled,
      loginBtnBgBgColor: "#ff9900",
      btnLoading: !this.data.btnLoading
    });
  },
  checkUserName:function(param){
    var username = trim(param.username);
    if (username.length <= 0) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '请输入用户名'
      });
      return false;
    } else {
      return true;
    }
  },
  checkPassword:function(param){
    var password = trim(param.password);
    if(password.length<=0){
      wx.showModal({
        title: '提示',
        showCancel:false,
        content: '请输入密码'
      });
      return false;
    }else{
      return true;
    }
  },
  checkUserInfo:function(param){
    var username1 = trim(param.username);
    var password1 = trim(param.password);
    var that = this;

    wx.request({
      url: 'http://localhost:8080/login',
      method: 'POST',
      data: {
        username: username1,
        password: password1
      },
      header: {
        'content-type': 'application/json',
      },
      success: res => {
        if (res.statusCode == 200) {
          if (res.data.status == 0) {
            wx.showToast({
              title: '登录成功',
              icon: 'success'
            });
            wx.setStorageSync('userName', username1);
            wx.setStorageSync('sessionKey', res.data.sessionKey);
            that.setLoginData2();
            that.redirectTo();
          } else if (res.data.status == -9) {
            wx.showModal({
              title: '提示',
              showCancel: false,
              content: '用户名或密码有误，请重新输入'
            });
            that.setLoginData2();
          } else if (res.data.status == -7) {
            wx.showModal({
              title: '提示',
              showCancel: false,
              content: '遇到系统异常'
            });
            that.setLoginData2();
          }
        } else {
          wx.showModal({
            title: '提示',
            content: '服务器出小差了，请重试',
            showCancel: false
          });
          that.setLoginData2();
        }
      },
      fail: function (res) {
        wx.showModal({
          title: '提示',
          content: '服务器出小差了，请重试',
          showCancel: false
        });
        that.setLoginData2();
      }
    })
  },
  redirectTo:function(){
    wx.switchTab({
      url: '../index/index',
    })
  }

})