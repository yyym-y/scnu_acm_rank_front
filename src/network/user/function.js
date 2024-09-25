import header from "./header";

export default {
    Login
}

export function Login( self, data ) {
    return header.Login(data).then((res) => {
        res = res.data
        if(res.status == 1) {
            self.$message.error("登陆失败[请检查学号和密码] :("); return null
        }
        self.$message.success("登录成功 :)")
        return res.data
    }).catch((err) => {
        self.$message.error("服务器异常 " + err);
    });
}