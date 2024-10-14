<template>
    <div>
      <el-dialog
          title="创建队伍" :visible.sync="dialogVisible" width="520px">
          <el-form label-position="left" label-width="96px" :model="form">
              <el-form-item label="队伍名称">
                  <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="队伍牛客名称">
                  <el-input v-model="form.nc_team_name"></el-input>
              </el-form-item>
              <el-form-item label="入队口令">
                  <el-input v-model="form.key"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary" @click="submit">创建</el-button>
              </el-form-item>
          </el-form>
      </el-dialog>
    </div>
  </template>
  
  <script>
  export default {
      data() {
          return {
              dialogVisible : false,
              form : {
                  name : "",
                  key : "",
                  nc_team_name : ""
              }
          }
      },
      methods: {
         openDis() {this.dialogVisible = true},
         submit() {
            this.$api.user.createTeam(this, this.form).then((res)=> {
                if(res == null) return
                localStorage.setItem("group_id", res.group_id)
                setTimeout(function() {
                    location.reload();
                },1000)
            })
         }
      }
  }
  </script>
  
  <style>
  
  </style>