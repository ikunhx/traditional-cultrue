import Vue from 'vue'
import App from './App.vue'
import store from './store';
//引入路由
import VueRouter from 'vue-router'
import router from './router'
//引入UI组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css' // 必须导入样式文件
// import 'element-ui/lib/theme-chalk/index.css';
//引入更改后的主题
// import '../theme/index.css'
Vue.config.productionTip = false
//使用UI组件库
Vue.use(ElementUI);
Vue.use(VueRouter);
window.addEventListener('error', e => {
  if (e.message.includes('ResizeObserver')) {
    e.preventDefault();
  }
});


new Vue({
  store,
  el: '#app',
  render: h => h(App),
  router: router,
  beforeCreate() {
    Vue.prototype.$bus = this
  }
});