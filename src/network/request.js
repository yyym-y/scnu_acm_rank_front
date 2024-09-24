import axios from 'axios'
const request = axios.create({
    baseURL: "http://127.0.0.1:8888",
    withCredentials: true // 表示请求可以携带cookie
})
export default request