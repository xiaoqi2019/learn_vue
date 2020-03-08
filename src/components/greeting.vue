<template>
    <div class="msg">
        <p>{{message}} {{name}}</p>
        <p v-bind:title="dream">学好Vue不是梦！</p>
<!--        <p v-if="isNotStar">你能不能看到我</p>-->
<!--        <p v-show="isNotStar">能看到我吗</p>-->
<!--        v-on为vue指令，用于绑定各种事件，事件触发之后，可以执行js操作-->
<!--        v-on可以缩写成@-->
<!--        v-bank可以缩写成：-->
<!--        <p @click="username='语嫣'">有一天，{{username}}想去网吧上网！</p>-->
<!--        <p v-on:click="username='语嫣'">有一天，{{username}}想去网吧上网！</p>-->
        <p @click="changeUsername">有一天，{{username}}想去网吧上网！</p>
        <p v-if="age>70">{{username}}爷爷，您还是回去锻炼身体吧！</p>
        <p v-else-if="age>=18">{{username}}欢迎光临，请愉快上网！</p>
        <p v-else>{{username}}小朋友，作业写完了吗？</p>
    </div>
</template>

<script>
    export default {
        name: "greeting",
        props:{
            message:String,
            name:String,
        },
        data(){
            return {
                dream:"愿望",
                isNotStar:true,
                username:"小星星",
                age:19
            }
        },
        methods:{
            changeUsername(){
                //this相当于self
                this.username = '一个快乐的人'
            }
        }
    }
</script>

<style scoped>
    .msg p{
        color: red;
    }
</style>