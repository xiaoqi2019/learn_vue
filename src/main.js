import Vue from 'vue'
import App from './App.vue' //导入App.vue根组件

//导入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//导入子组件
import HelloWorld from "./components/HelloWorld";
//创建全局组件
Vue.component('hello-world', HelloWorld);
//导入vue router对象
import router from "./router/index";

//创建Vue实例之前，要将element-ui插件插入到Vue中
Vue.use(ElementUI);


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App), //渲染App根组件
}).$mount('#app');
