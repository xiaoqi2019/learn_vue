import Vue from 'vue'
import App from './App.vue' //导入App.vue根组件

//导入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//创建Vue实例之前，要将element-ui插件插入到Vue中
Vue.use(ElementUI);


Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
