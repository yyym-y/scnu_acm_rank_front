import header from "./header";

export default {
    Login, register, sendEmail,
    createTeam, joinTeam
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

export function register( self, data ) {
    return header.register(data).then((res) => {
        res = res.data
        if(res.status == 1) {
            self.$message.error("注册失败 :("); return null
        }
        self.$message.success("注册成功 :)")
        return res.data
    }).catch((err) => {
        self.$message.error("服务器异常 " + err);
    });
}

export function sendEmail( self, data ) {
    return header.sendEmail(data).then((res) => {
        res = res.data
        if(res.status == 1) {
            self.$message.error("邮箱验证码发送失败 :("); return null
        }
        self.$message.success("邮箱验证码发送成功 :)")
        return res.data
    }).catch((err) => {
        self.$message.error("服务器异常 " + err);
    });
}

export function createTeam( self, data ) {
    return header.createTeam(data).then((res) => {
        res = res.data
        if(res.status == 1) {
            self.$message.error("队伍创建失败 :("); return null
        }
        self.$message.success("队伍创建成功 :)")
        return res.data
    }).catch((err) => {
        self.$message.error("服务器异常 " + err);
    });
}

export function joinTeam( self, data ) {
    return header.joinTeam(data).then((res) => {
        res = res.data
        if(res.status == 1) {
            self.$message.error("队伍加入失败 :("); return null
        }
        self.$message.success("队伍加入成功 :)")
        return res.data
    }).catch((err) => {
        self.$message.error("服务器异常 " + err);
    });
}
