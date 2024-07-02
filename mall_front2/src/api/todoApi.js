import axios from 'axios'

export const host = 'http://localhost:8000' //백엔드의 주소
const prefix = `${host}/todo` //request mapping url이 todo로 시작하도록 설정

export const getTodos = async query => {
    const response = await axios.get(`${prefix}/list`, {
        params:query
    })
    return response.data
}

export const getTodo = async todoNo => {
    const response = await axios.get(`${prefix}/${todoNo}`)
    return response.data
}