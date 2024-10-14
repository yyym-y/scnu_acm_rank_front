<template>
    <div>
      <el-dialog
          title="添加比赛" :visible.sync="dialogVisible" width="520px">
          <el-form label-position="left" label-width="84px" :model="form">
              <el-form-item label="类型">
                <el-select v-model="form.kind" placeholder="请选择比赛的类型">
                    <el-option v-for="item in options" :key="item.value" 
                    :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="比赛名称">
                  <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="比赛ID">
                  <el-input v-model="form.cp_id"></el-input>
              </el-form-item>
              <el-form-item label="Token">
                  <el-input v-model="form.json"
                        type="textarea" :rows="2" :autosize="{ minRows: 2, maxRows: 8}"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary" @click="submit">添加比赛</el-button>
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
              options : [
                {value: 0 , label : "vjudge"},
                {value: 1 , label : "牛客"},
                {value: 3 , label : "自定义"},
              ],
              form : {
                kind : null,
                name : "",
                cp_id : "",
                json : ""
              }
          }
      },
      methods: {
         openDis() {this.dialogVisible = true},
         submit() {
            this.$api.root.createCompetition(this, this.form).then((res) => {
                if(res == null) return
                console.log(res);
            })
         }
      }
  }
  </script>
  
  <style>
  
  </style>