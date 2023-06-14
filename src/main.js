import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
import './api/mock'
import Cookie from 'js-cookie'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(ElementUI)
//修改项目标题（此处网上代码参考还未知实现逻辑，后续需要搞清楚）
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
  }
})

router.beforeEach((to, from, next) => {
  //判断token存不存在
  const token = Cookie.get('token')
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  }else if(token && to.name === 'login'){
    //token存在，说明用户登录，此时跳转至首页
    next({name:'home'})
  }else{
   next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
