import axios from 'axios';
// 프론트입장에서는 백엔드가 api이다.
export const host = 'http://localhost:8000'
const prefix = `${host}/todo`

export const getTodos = async query => {
    const response = await axios.get(`${prefix}/list`, {
        params: query
    }) //response 안받으면 대기하기위해 await
    return response.data
}

export const getTodo = async todoNo => {
    const response = await axios.get(`${prefix}/${todoNo}`)
    return response.data
}

export const addTodo = async todo => {
    const response = await axios.post(`${prefix}/add`, todo)
    return response.data
}

export const delTodo = async todoNo => {
    const response = await axios.delete(`${prefix}/del/${todoNo}`)
    return response.data
}

export const fixTodo = async todoNo => {
    const response = await axios.put(`${prefix}/fix`, todo)
    return response.data
}