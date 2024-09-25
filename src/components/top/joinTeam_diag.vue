<template>
    <div>
      <el-dialog
          title="加入队伍" :visible.sync="dialogVisible" width="520px">
          <el-form label-position="left" label-width="84px" :model="form">
              <el-form-item label="入队口令">
                  <el-input v-model="form.key"></el-input>
              </el-form-item>
              <el-form-item label="队长学号">
                  <el-input v-model="form.stu_id" type="password"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary" @click="submit">加入</el-button>
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
                  key : "",
                  stu_id : ""
              }
          }
      },
      methods: {
         openDis() {this.dialogVisible = true},
         submit() {

         }
      }
  }
  </script>
  
  <style>
  
  </style>