<template>
    <div>
    <el-table
            ref="multipleTable"
            :data="tableData"
            style="width: 100%"
            class="project_list_new"
            @selection-change="handleSelectionChange">
        <el-table-column
                type="selection"
                width="120">
        </el-table-column>
        <el-table-column
                prop="name"
                label="项目名称"
                width="120">
        </el-table-column>
        <el-table-column
                prop="leader"
                label="负责人"
                width="120">
        </el-table-column>
        <el-table-column
                prop="app_name"
                label="应用名称"
                width="120">
        </el-table-column>
    </el-table>
        <div style="margin-top: 20px">
            <el-button @click="toggleSelection()">
                Clear selection
            </el-button>
        </div>
        <p>{{this.$route.params.id}}</p>
    </div>
</template>

<script>
    export default {
        name: "ProjectsList",
        data(){
            return {
                projects_headers:["项目名称", "项目负责人", "应用名称"],
                multipleTable:[],
                tableData:[
                    {name:"项目1", leader:"领导1", app_name:"应用1"},
                    {name:"项目2", leader:"领导2", app_name:"应用2"},
                    {name:"项目3", leader:"领导3", app_name:"应用3"},
                ]
            }
        },

        methods: {
            toggleSelection() {
                    this.$refs.multipleTable.clearSelection();
                },
            handleSelectionChange(val) {
                this.multipleTable = val;
                console.log(this.multipleTable)
            }
        }
    }
</script>

<style scoped>
    .project_list_new{
        margin: 50px 30%;
    }
</style>