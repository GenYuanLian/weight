const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//获取与微信号绑定的姓名（本地缓存或者远程数据库，return姓名或者null）
function getUserName() {
  console.log('getUserName()开始执行')
  if (!wx.getStorageSync("userName")) {//如果本地缓存中没有userName，从服务器获取姓名信息
    if (!wx.getStorageSync('sessionKey')) {//如果本地缓存中没有sessionKey,从服务器获取sessionKey
      console.log('本地缓存中没有sessionKey,调用getSessionKey()')
      getSessionKey()//从服务器获取sessionKey并存入本地缓存
      console.log('延时1秒开始')
      setTimeout(getName, 1500)//2秒后执行getName()函数
      console.log('延时1秒结束')
    } else {
      getName()
    }
  }
  console.log('getUserName()结束，内存中userName：' + wx.getStorageSync("userName"))
}


/**
 * @params sessionKey
 * 设定userName
 */
function getName() {
  wx.request({
    url: 'http://localhost:8080/getName',
    method: "POST",
    data: {
      sessionKey: wx.getStorageSync("sessionKey")
    },
    success: res => {
      if (res.statusCode == 200) {
        // console.log("getUserName.js " + res.data)
        // if (res.data != "") {//如果name不为空，存入本地缓存并返回
        wx.setStorageSync("userName", res.data)
        // }
      } else {
        console.log("获取用户姓名请求失败")
        console.log(res)
      }
    },
    fail: res => {
      console.log("获取用户姓名出错")
      console.log(res)
    }
  })
}

function getSessionKey() {//登录并发送code给服务器，获取sessionKey
  console.log('getSessionKey()开始执行')
  wx.login({
    success: res => {
      if (res.code) {
        //发起网络请求
        wx.request({
          url: 'http://localhost:8080/onLogin',
          method: "POST",
          data: {
            code: res.code
          },
          success: res => {
            console.log(res)
            if (res.statusCode == 200) {
              wx.setStorageSync('sessionKey', res.data)//将sessionKey存入本地缓存
            }
          }
        })
      } else {
        console.log('获取用户登录态失败！' + res.errMsg)
      }
    }
  })
  console.log('getSessionKey()执行完毕')
}

function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

function empty(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "").length == 0;
}

module.exports = {
  formatTime: formatTime,
  getUserName: getUserName,
  getSessionKey: getSessionKey,
  trim: trim,
  empty: empty
}
