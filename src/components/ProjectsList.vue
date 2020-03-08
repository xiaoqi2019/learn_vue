<template>
    <div>
        <table>
            <tr>
                <th v-for="(project, key) in projects_headers" v-bind:key="key">{{project}}</th>
<!--                <th>项目负责人</th>-->
<!--                <th>应用名称</th>-->
            </tr>
<!--            绑定属性：v-bind 可缩写成：冒号-->
            <tr v-for="(item, key) in projects" :key="key">
                <td>{{item.name}}</td>
                <td>{{item.leader}}</td>
                <td>{{item.app_name}}</td>
            </tr>

<!--            <tr>-->
<!--                <td>项目2</td>-->
<!--                <td>2</td>-->
<!--                <td>应用2</td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--                <td>项目3</td>-->
<!--                <td>3</td>-->
<!--                <td>应用3</td>-->
<!--            </tr>-->

        </table>
    </div>
</template>

<script>
    export default {
        name: "ProjectsList",
        data(){
            return{
                projects_headers:["项目名称", "项目负责人", "应用名称"],
                projects:[
                    {name:"项目1", leader:"领导1", app_name:"应用1"},
                    {name:"项目2", leader:"领导2", app_name:"应用2"},
                    {name:"项目3", leader:"领导3", app_name:"应用3"},
                ]
            }
        }
    }
</script>

<style scoped>
    table{
        margin: 50px auto;
        border-collapse: collapse;
        width: 40%;
    }
    td, th{
        border: 1px solid #dddddd;
        padding: 8px;
    }
</style>