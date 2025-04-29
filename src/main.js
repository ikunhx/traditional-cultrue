import Vue from 'vue'
import App from './App.vue'
import store from './store';
//引入路由
import VueRouter from 'vue-router'
import router from './router'
//引入UI组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css' // 必须导入样式文件
//引入懒加载
Vue.config.productionTip = false
//使用UI组件库
Vue.use(ElementUI);
Vue.use(VueRouter);

window.addEventListener('error', e => {
  if (e.message.includes('ResizeObserver')) {
    e.preventDefault();
  }
});

// window.addEventListener("beforeunload", function (e) {
//   // (e || window.event).returnValue = '确定离开此页吗？';
//   this.alert(666)
//   //注意：这里return方法是不起作用的
// });

new Vue({
  store,
  el: '#app',
  render: h => h(App),
  router: router,
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$baseUrl='http://121.40.221.40:998/'
  }
});

// 添加全局的 beforeunload 事件监听器
document.addEventListener('DOMContentLoaded', function () {
  // 设置一个唯一标识符以识别页面刷新
  let pageSessionId = sessionStorage.getItem('pageSessionId');
  
  if (!pageSessionId) {
    // 如果没有找到标识符，表示可能是新的会话或第一次加载
    // 清除 token (可选)
    store.commit('setToken', '');
    store.commit('setAdmin', '');
    
    // 创建一个新的标识符并存入 sessionStorage
    pageSessionId = 'session_' + new Date().getTime();
    sessionStorage.setItem('pageSessionId', pageSessionId);
  }
  
  // 检查是否有 token 需要恢复 (如果应用需要的话)
  // 这里可以根据实际情况调整逻辑
});