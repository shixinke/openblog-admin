const store = {
  set(key, value, persist){
    return this.obj(persist).setItem(key, value)
  },
  get(key, persist){
    return this.obj(persist).getItem(key)
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
export default store
