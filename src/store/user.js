import http from '../utils/http'
import storage from '../utils/storage'
import cookie from '../utils/cookie'
const User = {
  userInfo:{},
  get(field) {
    if (this.userInfo.uid) {
      if (field) {
        return this.userInfo[field]
      }
      return this.userInfo;
    }
    let userInfo = storage.get('userInfo')
    if (userInfo) {
      this.userInfo = userInfo;
      if (field) {
        return this.userInfo[field]
      }
      return userInfo
    }
    userInfo = cookie.get('userInfo')
    if (userInfo) {
      this.userInfo = userInfo;
      storage.set('userInfo', userInfo)
      if (field) {
        return this.userInfo[field]
      }
      return userInfo
    }
    http.post('/passport/userinfo').then(response => {
      this.set(userInfo)
    })
  },
  set(userInfo) {
    let info = this.get()
    if (info ) {
      for (let key in userInfo) {
        info[key] = userInfo[key]
      }
    }  else {
      info = userInfo
    }
    this.userInfo = info;
    storage.set('userInfo', info)
    cookie.set('userInfo', info, {expires : 7200})
  },
  destroy() {
    this.userInfo = {}
    storage.remove('userInfo')
    cookie.remove('userInfo')
  }
}

export default User;
