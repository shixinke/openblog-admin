const storage = {
  set(key, value, persist){
    value = JSON.stringify(value)
    return this.obj(persist).setItem(key, value)
  },
  get(key, persist){
    let value = this.obj(persist).getItem(key)
    if (value) {
      return JSON.parse(value)
    }
    return value
  },
  remove(key, persist){
    return this.obj(persist).removeItem(key)
  },
  clear(persist){
    return this.obj(persist).clear()
  },
  length(persist){
    return this.obj(persist).length()
  },
  obj(persist){
    if (persist) {
      return window.localStorage
    } else {
      return window.sessionStorage
    }
  }
}
export default storage
