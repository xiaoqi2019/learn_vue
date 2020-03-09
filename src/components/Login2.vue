<template>
    <div>
        <el-form :model="ruleForm" ref="ruleForm"
                 label-width="70px" class="demo-ruleForm" :label-position="labelPosition">
            <el-form-item label="用户名">
                <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <p>输入用户名：{{ruleForm.username}}</p>
        <p>输入密码：{{ruleForm.password}}</p>
        <p>------------------------------</p>
<!--        展示路由的页面内容-->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:"Login2",
        data(){
            return{
                labelPosition:"right",
                username:"snow",
                password:"123456",
                ruleForm:{
                    username:"",
                    password:"",
                }
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
    .demo-ruleForm{
        width:350px;
        margin:50px auto;
    }
</style>