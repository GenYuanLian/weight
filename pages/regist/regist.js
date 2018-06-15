var util = require("../../utils/util.js");

Page({
  data:{
    registBtnTxt:"注册",
    registBtnBgBgColor:"#ff9900",
    btnLoading:false,
    registDisabled:false,
    inputUserName: '',
    inputPassword: '',
    phoneNum: ''
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
    var flag = this.checkUserName(param)&&this.checkPassword(param);
    var that = this;
    if(flag){
        this.setregistData1();
        wx.request({
          url: 'http://localhost:8080/register',
          method: 'POST',
          data: {
            username: param.username.trim(),
            password: param.password.trim()
          },
          header: {
            'content-type': 'application/json',
          },
          success: res => {
            if (res.statusCode == 200) {
              if (res.data.status == 0) {
                wx.showToast({
                  title: '注册成功',
                  icon: 'success'
                });
                that.setregistData2();
                that.redirectTo();
              } else if (res.data.status == -8) {
                wx.showModal({
                  title: '提示',
                  showCancel: false,
                  content: '用户名已存在，请重新输入'
                });
                that.setregistData2();
              } else if (res.data.status == -7) {
                wx.showModal({
                  title: '提示',
                  showCancel: false,
                  content: '遇到系统异常'
                });
                that.setregistData2();
              }
            } else {
              wx.showModal({
                title: '提示',
                content: '服务器出小差了，请重试',
                showCancel: false
              });
              that.setregistData2();
            }
          }
        })
    } 
  },
  setregistData1:function(){
    this.setData({
      registBtnTxt:"注册中",
      registDisabled: !this.data.registDisabled,
      registBtnBgBgColor:"#999",
      btnLoading:!this.data.btnLoading
    });
  },
  setregistData2:function(){
    this.setData({
      registBtnTxt:"注册",
      registDisabled: !this.data.registDisabled,
      registBtnBgBgColor:"#ff9900",
      btnLoading:!this.data.btnLoading
    });
  },
  checkUserName:function(param){ 
    var userName = param.username.trim();
    if (userName.length <= 0) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '请设置用户名'
      });
      return false;
    }
    return true;
  },
  checkPassword:function(param) {
    var password = param.password.trim();
    var passwordVerify = param.passwordVerify.trim();
    if(password.length<=0){
      wx.showModal({
        title: '提示',
        showCancel:false,
        content: '请设置密码'
      });
      return false;
    }else if(password.length<6||password.length>20){
      wx.showModal({
        title: '提示',
        showCancel:false,
        content: '密码长度为6-20位字符'
      });
      return false;
    }else if(password != passwordVerify) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '密码和密码确认不一致'
      });
      return false;
    } else {
      return true;
    }
  },
  redirectTo:function(){
    wx.redirectTo({
      url: '../login/login',
    })
  }

})