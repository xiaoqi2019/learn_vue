<!--template用户展示给用户，相当于MVVM中的V-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
<!--    <p>白日依山尽</p>-->
<!--    <p>黄河入海流</p>-->
<!--    <p>欲穷千里目</p>-->
<!--    <p>更上一层楼</p>-->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
