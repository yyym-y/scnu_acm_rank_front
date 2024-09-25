<template>
    <div>
      <el-dialog
          title="注册账号" :visible.sync="dialogVisible" width="520px">
        <el-form label-position="left" label-width="88px" :model="form">
            <el-form-item label="学号">
                <el-input v-model="form.stu_id"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password" type="password"></el-input>
            </el-form-item>
            <el-form-item label="vjudge名称">
                <el-input v-model="form.vj_name"></el-input>
            </el-form-item>
            <el-form-item label="牛客名称">
                <el-input v-model="form.nc_name"></el-input>
            </el-form-item>
            <el-form-item label="CF-ID">
                <el-input v-model="form.cf_id"></el-input>
            </el-form-item>
            <el-form-item label="真实姓名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-input v-model="form.sex"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="form.email" style="width: 72%;"></el-input>
                <el-button type="primary" plain style="width: 28%;">发送验证码</el-button>
            </el-form-item>
            <el-form-item label="验证码">
                <el-input v-model="form.code"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit">注册</el-button>
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
                stu_id : "",
                password : "",
                vj_name : "",
                nc_name : "",
                cf_id : "",
                name : "",
                sex : "",
                email : "",
                code : ""
              }
          }
      },
      methods: {
         openDis() {this.dialogVisible = true},
         submit() {} 
      }
  }
  </script>
  
  <style>
  
  </style>