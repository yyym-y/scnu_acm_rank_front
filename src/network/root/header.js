import request from '../request';

export default {
    createCompetition
}

export function createCompetition(data) {
    return request({
        method : 'POST',
        url:'/root/createCompetition',
        data: data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}