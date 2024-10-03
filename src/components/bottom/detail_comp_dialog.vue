<template>
  <div>
    <el-dialog :title="title"
        :visible.sync="dialogVisible" width="600px">
        <span class="Dialog-title">
            <div v-if="ifTeam">
                <strong>队伍名 : </strong> {{ teamName }}  ; 
                <strong>队伍成员 : </strong>
                <span v-for="(pr, i) in users" :key="'users-' + i">{{ pr }} </span>                
            </div>
            <div v-else>暂时没有队伍信息</div>
        </span>
        <div style="height:400px;">
            <el-scrollbar style="height:100%" wrap-style="overflow-x:hidden;">
                <el-table :data="formDate" border style="width: 100%; margin-top: 20px;">
                    <el-table-column
                        prop="name" :label="SType" min-width="20%" align="center" show-overflow-tooltip></el-table-column>
                    <el-table-column
                        prop="comp_name" label="比赛名称" min-width="50%" align="center" show-overflow-tooltip></el-table-column>
                    <el-table-column
                        prop="rank" label="排名" min-width="10%" align="center"></el-table-column>
                    <el-table-column
                        prop="solve" label="做题数" min-width="15%" align="center"></el-table-column>
                    <el-table-column
                        prop="penalty" label="罚时" min-width="15%" align="center"></el-table-column>
                </el-table>
            </el-scrollbar>            
        </div>

    </el-dialog>
  </div>
</template>

<script>
export default {
    props : ["title", "type"],
    data() {
        return {
            dialogVisible : false,
            teamName : "",
            users : [],
            ifTeam : false,
            formDate : [],
            SType : ""
        }
    },
    methods: {
        openDialog() {this.dialogVisible = true},
        clearDialog() {
            this.ifTeam = false; this.teamName = ""
            this.users = []
        },
        updateDialog( stu_id ) {
            this.clearDialog();
            this.$api.index.TeamDetail(this, {
                stu_id : stu_id,
                type : this.type
            }).then((res) => {
                if(res == null) return
                this.ifTeam = true;
                this.teamName = res.name;
                this.users = res.users;
            })
            if(this.type == "person")
                this.getPersonInfo(stu_id);
            else this.getGroupInfo(stu_id)
        },
        getPersonInfo(stu_id) {
            this.$api.index.personCompetitions(this, {
                stu_id : stu_id
            }).then((res) => {
                if(res == null) return
                this.formDate = res;
            })
        },
        getGroupInfo(stu_id) {
            this.$api.index.groupCompetitions(this, {
                stu_id : stu_id
            }).then((res) => {
                if(res == null) return
                this.formDate = res;
            })
        },
    },
    created() {
        if(this.type == "person") this.SType = "姓名"
        else this.SType = "队伍名"
    }
}
</script>

<style>
.Dialog-title {
    font-size: medium;
}
.el-scrollbar__wrap{
  overflow-x: hidden;
}
</style>