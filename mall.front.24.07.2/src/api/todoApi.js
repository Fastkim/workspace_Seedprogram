import axios from 'axios'

export const host = 'http://localhost:8000'
const prefix= `${host}/todo` //requestMapping url

export const getTodos = async param => {
    const response = await axios.get(`${prefix}/list`, {
        params: param //query에는 page,size가 들어있다.
    })
    return response.data //response에는 next,prev,currentPage 등등이 있다.
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
    const response = await axios.del(`${prefix}/del/${todoNo}`) // 백엔드 controller url을 그대로 붙이고있다.
    return response.data
}

export const fixTodo = async todo => {
    const response = await axios.put(`${prefix}/fix`, todo)
    return response.data
}