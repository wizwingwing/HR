import axios from 'axios'

const url = 'http://localhost:5000'
let headers = {
    "auth-token": sessionStorage.getItem("token"),
};

export const login = async (body) => {
    const res = await axios.post(`${url}/auth/login`, body)
        .then(res => res.data)
        .catch(err => console.log(err))

    if (res.accessToken) {
        sessionStorage.setItem('token', res.accessToken)
        sessionStorage.setItem('refetchToken', res.refetchToken)
        headers['auth-token'] = res.accessToken
        return true
    } else {
        return false
    }
}

export const get = async (params) => {
    const res = await axios.get(`${url}` + params, { headers })
    return res
}

export const post = async (params, body) => {
    return await axios.post(`${url}` + params, body)
}