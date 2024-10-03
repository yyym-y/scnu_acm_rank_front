<template>
  <div>
    <div v-if="ifLogIn">
        <div v-if="ifRoot">
            <el-button @click="openAddComp">添加比赛</el-button>
            <el-button type="danger" @click="logout">退出</el-button>
        </div>
        <div v-if="ifHaveTeam && ifRoot == false">
            <el-button type="info" @click="openEditTeam" plain>管理队伍</el-button>
            <el-button type="danger" @click="logout">退出</el-button>
        </div>
        <div v-else-if="ifHaveTeam == false && ifRoot == false">
            <el-button type="success" plain @click="openCreateTeam">创建队伍</el-button>
            <el-button type="info" plain @click="openJoinTeam">加入队伍</el-button>
            <el-button type="danger" @click="logout">退出</el-button>
        </div>
    </div>
    <div v-else>
        <el-button type="primary" @click="openLogin">登录</el-button>
        <el-button type="success" @click="openResgister">注册</el-button>
    </div>
    <Login_diagVue ref="llogin"></Login_diagVue>
    <register_diagVue ref="rresgister"></register_diagVue>
    <joinTeam_daig ref="jjoinTeam"></joinTeam_daig>
    <createTeam_diag ref="ccreateTeam"></createTeam_diag>
    <add_comp_diag ref="addComp"></add_comp_diag>
    <editTeam_diag ref="eeditTeam"></editTeam_diag>
  </div>
</template>

<script>
import Login_diagVue from './Login_diag.vue'
import register_diagVue from './register_diag.vue'
import joinTeam_daig from './joinTeam_diag.vue';
import createTeam_diag from './createTeam_diag.vue';
import add_comp_diag from './add_comp_diag.vue';
import editTeam_diag from './editTeam_diag.vue';
export default {
    components : {
        Login_diagVue, register_diagVue,
        joinTeam_daig, createTeam_diag, editTeam_diag,
        add_comp_diag
    },
    data() {
        return {
            ifLogIn : false,
            ifRoot : false,
            ifHaveTeam : false
        }
    },
    methods : {
        openLogin() {this.$refs.llogin.openDis()},
        openResgister() {this.$refs.rresgister.openDis()},
        openJoinTeam() {this.$refs.jjoinTeam.openDis()},
        openCreateTeam() {this.$refs.ccreateTeam.openDis()},
        openAddComp() {this.$refs.addComp.openDis()},
        openEditTeam() {this.$refs.eeditTeam.openDis()},
        logout() {
            localStorage.clear();
            this.$message.success("退出成功 :)");
            setTimeout(function() {location.reload()}, 1000)
        }
    },
    created() {
        let token = localStorage.getItem("token")
        if(token == null || token.length == 0) {this.ifLogIn = false}
        else {
            this.ifLogIn = true;
            let groupId = localStorage.getItem("group_id")
            if(groupId == null || groupId == "0") {this.ifHaveTeam = false}
            else this.ifHaveTeam = true;
            let level = localStorage.getItem("level")
            if(level == null || level == "0") this.ifRoot = false;
            else this.ifRoot = true;
        }
    }
}
</script>

<style>

</style>