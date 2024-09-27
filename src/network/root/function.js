import header from "./header";

export default {
    createCompetition
}

export function createCompetition( self, data ) {
    return header.createCompetition(data).then((res) => {
        res = res.data
        if(res.status == 1) {
            self.$message.error("比赛创建失败 :("); return null
        }
        self.$message.success("比赛创建成功 :)")
        return res.data
    }).catch((err) => {
        self.$message.error("服务器异常 " + err);
    });
}