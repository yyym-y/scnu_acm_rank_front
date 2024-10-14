<template>
    <div>
      <div v-if="ifLogIn">
          <div v-if="ifRoot">
              <el-button @click="openAddComp">添加比赛</el-button>
              <el-button type="danger" @click="logout">退出</el-button>
              <add_comp_dialog ref="addComp"></add_comp_dialog>
          </div>
          <div v-if="ifHaveTeam && ifRoot == false">
              <el-button type="info" @click="openEditTeam" plain>管理队伍</el-button>
              <el-button type="danger" @click="logout">退出</el-button>
              <edit_team_dialog ref="eeditTeam"></edit_team_dialog>
          </div>
          <div v-else-if="ifHaveTeam == false && ifRoot == false">
              <el-button type="success" plain @click="openCreateTeam">创建队伍</el-button>
              <el-button type="info" plain @click="openJoinTeam">加入队伍</el-button>
              <el-button type="danger" @click="logout">退出</el-button>
              <join_team_dialog ref="jjoinTeam"></join_team_dialog>
              <create_team_dialog ref="ccreateTeam"></create_team_dialog>            
          </div>
      </div>
      <div v-else>
          <el-button type="primary" @click="openLogin">登录</el-button>
          <el-button type="success" @click="openResgister">注册</el-button>
          <logIn_dialog ref="llogin"></logIn_dialog>
          <register_dialog ref="rresgister"></register_dialog>        
      </div>
    </div>
  </template>
  
  <script>
  import logIn_dialog from '../Dialog/logIn_dialog.vue';
  import register_dialog from '../Dialog/register_dialog.vue';
  import join_team_dialog from '../Dialog/join_team_dialog.vue';
  import create_team_dialog from '../Dialog/create_team_dialog.vue';
  import add_comp_dialog from '../Dialog/add_competition_dialog.vue';
  import edit_team_dialog from '../Dialog/edit_team_dialog.vue';
  export default {
      components : {
        logIn_dialog, register_dialog,
        join_team_dialog, create_team_dialog, edit_team_dialog,
        add_comp_dialog
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