<template>
  <div>
    <el-dialog
        title="登录账号" :visible.sync="dialogVisible" width="520px">
        <el-form label-position="left" label-width="48px" :model="form">
            <el-form-item label="学号">
                <el-input v-model="form.stu_id"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit">登录</el-button>
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
                password : ""
            }
        }
    },
    methods: {
       openDis() {this.dialogVisible = true},
       submit() {
            this.$api.user.Login(this, this.form).then((res) => {
                localStorage.setItem("token", res.token)
                localStorage.setItem("level", res.user.level)
                localStorage.setItem("name", res.user.name)
                localStorage.setItem("stu_id", res.user.stu_id)
                localStorage.setItem("cf_id", res.user.cf_id)
                localStorage.setItem("vj_name", res.user.vj_name)
                localStorage.setItem("group_id", res.user.group_id)
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