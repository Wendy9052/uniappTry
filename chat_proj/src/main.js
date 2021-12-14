// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import JwChat from 'jwchat';
Vue.use(ElementUI);
/* 在 0.2.041 之前的版本需要引入 css */
// import 'jwchat/lib/JwChat.css';
Vue.use(JwChat)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
