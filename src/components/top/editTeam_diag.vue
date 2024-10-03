<template>
  <div>
    <el-dialog
          title="队伍管理" :visible.sync="dialogVisible" width="520px">
          <el-form label-position="left" label-width="84px" :model="form">
              <el-form-item label="队伍名">
                  <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="入队口令">
                  <el-input v-model="form.key"></el-input>
              </el-form-item>
              <el-form-item label="队长学号">
                  <el-input v-model="form.leader"></el-input>
              </el-form-item>
              <el-form-item label="牛客队伍名">
                  <el-input v-model="form.nc_team_name"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary" @click="submit">确认修改</el-button>
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
                leader : "",
                nc_team_name : "",
            }
        }
    },
    methods : {
        openDis() {this.dialogVisible = true},
        submit() {
            this.$api.user.editTeam(this, this.form)
        }
    },
    beforeCreate() {
        this.$api.user.totalTeamDetail(this).then((res) => {
            if(res == null) return;
            this.form = res;
            this.form.id = localStorage.getItem("group_id");
        })
    },
}
</script>

<style>

</style>