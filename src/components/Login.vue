<template>
    <div class="login">
        <form method="post" action="">
            <label for="username">用户名：</label>
<!--            v-bind缩写成：-->
<!--            v-on缩写成@-->
            <input type="text" id="username"
                   placeholder="请输入用户名" v-model="username">
            <br>
            <label for="password">密&nbsp;&nbsp;&nbsp;码：</label>
            <input type="password" id="password"
                   placeholder="请输入用户名" v-model="password">
        </form>
        <p>输入用户名：{{username}}</p>
        <p>输入密码：{{password}}</p>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                username:"",
                password:""
            }
        }
    }
</script>

<style scoped>
    input{
        margin: 10px auto;
        font-size: medium;
    }
    label{
        margin-right: 10px;
    }
</style>