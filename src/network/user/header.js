import request from '../request';

export default {
Login
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