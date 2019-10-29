import axios from 'axios';

export default {
    login(user) {
        // 返回是一个promise
        return axios.get('/api/login', { params: user })
    }
}