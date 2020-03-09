<!--template用户展示给用户，相当于MVVM中的V-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--在父组件中给子组件传值-->
    <hello-world msg="欢迎来到星辰的天空" :title="title"/>
<!--    <greeting message="你好" name="星辰"/>-->
<!--    <ProjectsList></ProjectsList>-->
<!--    <TableList/>-->
<!--    <Login/>-->
<!--    <Login2/>-->

    <ul>
      <li><router-link :to="{ name:'home' }">主页</router-link></li>
      <li><router-link :to="{ name:'greeting', params: {username:'snow'}}">欢迎页面</router-link></li>
      <li><router-link to='/login'>登录1</router-link></li>
      <li><router-link to="/login2">登录2</router-link></li>
      <li><router-link to="/project_list">项目列表</router-link></li>
      <li><router-link to="/table_list">表单列表</router-link></li>
    </ul>
<!--    展示路由的页面内容-->
    <router-view></router-view>
  </div>
</template>

<script>
  // 导入子组件
  // import HelloWorld from './components/HelloWorld.vue';
  // import greeting from "./components/greeting";
  // import ProjectsList from "./components/ProjectsList";
  // import TableList from "./components/TableList";
  // import Login from "./components/Login";
  // import Login2 from "./components/Login2";

export default {
  // 定义组件名称
  name: 'App',
  components: {  // 声明子组件
    // HelloWorld,
    // greeting,
    // ProjectsList,
    // TableList,
    // Login,
    // Login2,
  },
  data(){
    return{
      title:2020
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
