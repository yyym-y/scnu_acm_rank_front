import header from "./header";

export default {
    P_Competitions, G_Competitions,
    TeamDetail, 
    personCompetitions, groupCompetitions
}

export function P_Competitions( self ) {
    return header.P_Competitions().then((res) => {
        res = res.data
        if(res.status == 1) {
            self.$message.error("个人榜单加载失败..."); return null
        }
        return res.data
    }).catch((err) => {
        self.$message.error("服务器异常 " + err);
    });
}

export function G_Competitions( self ) {
    return header.G_Competitions().then((res) => {
        res = res.data
        if(res.status == 1) {
            self.$message.error("团队榜单加载失败..."); return null
        }
        return res.data
    }).catch((err) => {
        self.$message.error("服务器异常 " + err);
    });
}

export function TeamDetail( self, params ) {
    return header.TeamDetail(params).then((res) => {
        res = res.data
        if(res.status == 1) {
            self.$message.error("团队信息加载失败..."); return null
        }
        return res.data
    }).catch((err) => {
        self.$message.error("服务器异常 " + err);
    });
}

export function personCompetitions( self, params ) {
    return header.personCompetitions(params).then((res) => {
        res = res.data
        if(res.status == 1) {
            self.$message.error("个人比赛信息加载失败..."); return null
        }
        return res.data
    }).catch((err) => {
        self.$message.error("服务器异常 " + err);
    });
}

export function groupCompetitions( self, params ) {
    return header.groupCompetitions(params).then((res) => {
        res = res.data
        if(res.status == 1) {
            self.$message.error("团队比赛信息加载失败..."); return null
        }
        return res.data
    }).catch((err) => {
        self.$message.error("服务器异常 " + err);
    });
}