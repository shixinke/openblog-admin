// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementUI from 'element-ui'
import VCharts from 'v-charts'
import 'element-ui/lib/theme-chalk/index.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import userStore from './store/user'

Vue.config.productionTip = false

Vue.use(elementUI)
Vue.use(VCharts)
Vue.use(mavonEditor)

Vue.component('iconfont', {
  // 声明 props
  props: ['className'],
  // 就像 data 一样，prop 也可以在模板中使用
  // 同样也可以在 vm 实例中通过 this.message 来使用
  template: '<i :class="className"></i>'
})

router.beforeEach((to,from,next)=>{
  console.log('全局路由控制');
  console.log(process.env)
  if(!to.matched.some(route=>route.meta.withoutAuth)){
    let uid = userStore.get('uid')
    if(uid){
      next();
    }else{
      next({
        path:'/login',
        query:{redirect:to.fullPath}
      })
    }
  }else{
    next();
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
