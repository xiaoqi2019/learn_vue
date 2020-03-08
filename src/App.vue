<!--template用户展示给用户，相当于MVVM中的V-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--在父组件中给子组件传值-->
    <HelloWorld msg="欢迎来到星辰的天空"/>
    <greeting message="你好" name="星辰"/>
    <ProjectsList></ProjectsList>
  </div>
</template>

<script>
  // 导入子组件
  import HelloWorld from './components/HelloWorld.vue'
  import greeting from "./components/greeting"
  import ProjectsList from "./components/ProjectsList";

export default {
  // 定义组件名称
  name: 'App',
  components: {  // 声明子组件
    HelloWorld,
    greeting,
    ProjectsList
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
