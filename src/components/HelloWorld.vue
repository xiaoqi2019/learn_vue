<!--template用户展示给用户，相当于MVVM中的V-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
<!--    <p>白日依山尽</p>-->
<!--    <p>黄河入海流</p>-->
<!--    <p>欲穷千里目</p>-->
<!--    <p>更上一层楼</p>-->
    <p>{{title}}</p>

<!--    <el-image :src="url" fit="cover">-->
<!--    </el-image>-->
    <slot></slot>

    <slot>
      <p>让我们一起学猫叫</p>
    </slot>

    <slot name="part1"></slot>

    <slot name="part2"></slot>

    <slot name="part3"></slot>

<!--    作用域-->
    <slot name="part4" :user="username"></slot>
    <slot name="part5" :user="user"></slot>
    <slot name="part6" user="七七"></slot>
    <slot name="part7" user="小白"></slot>
  </div>
</template>

<script>
  import {dogs} from "../api/api";

  export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    title: Number
  },
  data() {
    return {
      url:'',
      username:'木子',
      user:'星辰'
    }
  },
  mounted(){
    dogs()
    .then( response => {
        console.log(response);
        console.log(response.data);
        this.url = response.data.message;
    })
    .catch(function (err) {
        console.log(err);
    });
  },
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
