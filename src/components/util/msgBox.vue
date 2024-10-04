<template>
  <div></div>
</template>

<script>
export default {
    data() {
        return {
            msg : `
            <strong>请各位注册过队伍的成员登录后前往队伍管理界面完善牛客队伍信息</strong>, 以确保牛客团队赛信息成功导入
            </br>
            如有任何的BUG或者使用问题,请联系管理员</br>
            wx: 15919308028 </br>
            email : yyym-y@outlook.com </br>

            <div id="no-notify">
            <input type="checkbox" id="ccheckBox" onclick="(function(ele){
                if(ele.checked) localStorage.setItem('notify', '0');
                else localStorage.setItem('notify', '1');
            })(this)"/> 不再提醒 
            </div>
            `
        }
    },
    mounted() {
        let notify = localStorage.getItem("notify")
        if(notify == null || notify == "1") {
            this.$notify.info({
                title: 'RANK 网站更新提示',
                message: this.msg,
                dangerouslyUseHTMLString: true,
                offset: 120,
                duration : 0
            })            
        }
    }
}
</script>

<style>
.el-notification {
    width: 380px !important;
}
/* 
            如有任何的BUG或者使用问题,请联系管理员</br>
            wx: 15919308028 </br>
            email : yyym-y@outlook.com </br>
*/

#no-notify {
    color: blueviolet;
    display: flex;
    align-items: center;
    margin-top: 4px;
    font-size: small;
    float: right;
}
</style>