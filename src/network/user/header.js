import request from '../request';

export default {
    Login, register, sendEmail,
    createTeam, joinTeam, editTeam, totalTeamDetail
}

export function Login(data) {
    return request({
        method : 'POST',
        url:'/login',
        data: data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

export function register(data) {
    return request({
        method : 'POST',
        url:'/register',
        data: data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

export function sendEmail(data) {
    return request({
        method : 'POST',
        url:'/sendEmail',
        data: data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

export function createTeam(data) {
    return request({
        method : 'POST',
        url:'/user/createTeam',
        data: data,
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization' : localStorage.getItem("token")
        }
    })
}

export function joinTeam(data) {
    return request({
        method : 'POST',
        url:'/user/joinTeam',
        data: data,
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization' : localStorage.getItem("token")
        }
    })
}

export function editTeam(data) {
    return request({
        method : 'POST',
        url:'/user/editTeam',
        data: data,
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization' : localStorage.getItem("token")
        }
    })
}

export function totalTeamDetail() {
    return request({
        method : 'POST',
        url:'/user/totalTeamDetail',
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization' : localStorage.getItem("token")
        }
    })
}