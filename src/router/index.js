// 0.安装导入vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter)

//2.导入组件
import greeting from "../components/greeting";
import HelloWorld from "../components/HelloWorld";
import Login from "../components/Login";
import Login2 from "../components/Login2";
import ProjectsList from "../components/ProjectsList";
import TableList from "../components/TableList";

// 3. Create the router
const router = new VueRouter({
    mode: 'history',
    routes: [
        // routes数组中的一个对象，就是一条路由
        { path: '/', component: HelloWorld, name:"home" },
        //在组件中，可以通过this.$route.query来获取字符参数
        // 在组件中可以通过this.$route.params来获取字符串参数
        // { path: '/greeting/:username', component: greeting, name:"greeting"},
        { path: '/greeting', component: greeting, name:"greeting"},
        { path: '/login', component: Login, name:"login" },
        {
            path: '/login2',
            component: Login2,
            name:"login2",
            // children:[
            //     { path: "", component:Login2 },
            //     { path: "/table_list", component: TableList},
            // ]
        },
        { path: '/project_list', component: ProjectsList, name:"project_list"},
        // { path: '/table_list/:id', component: TableList, name:"table_list"},
        { path: '/table_list', component: TableList, name:"table_list"},
    ]
});

//4.导出路由
export default router;