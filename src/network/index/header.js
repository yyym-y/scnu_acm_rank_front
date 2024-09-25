import request from '../request';

export default {
    P_Competitions, G_Competitions,
    TeamDetail,
    personCompetitions, groupCompetitions
}

// person rank table info
export function P_Competitions() {
    return request({
        method : 'GET',
        url:'/competition/person',
    })
}
// group rank table info
export function G_Competitions() {
    return request({
        method : 'GET',
        url:'/competition/group',
    })
}

// get Team member
export function TeamDetail(params) {
    return request({
        method : 'GET',
        url:'/TeamDetail',
        params : params
    })
}
// get person competition info
export function personCompetitions(params) {
    return request({
        method : 'GET',
        url:'/personCompetitions',
        params : params
    })
}
// get group competition info
export function groupCompetitions(params) {
    return request({
        method : 'GET',
        url:'/groupCompetitions',
        params : params
    })
}