import axios from 'axios';

export const host = 'http://localhost:8000' //백엔드의 주소
const prefix = `${host}/todo` //request mapping url이 todo로 시작하도록 설정

export const getTodos = async query => {
    const response = await axios.get(`${prefix}/list`, {
        params:query
    }) // axios.get(`${prefix}/lsit?query): 통신요청하는 axios api
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
    const response = await axios.del(`${prefix}/del/${todoNo}`) //백엔드 controller url을 그대로 붙이고있다.
    return response.data
}

export const fixTodo = async todo => {
    const response = await axios.put(`${prefix}/fix`, todo)
    return response.data
}

// 백엔드랑 통신하는 부분

// 비동기 작업: 특정코드의 로직이 끝날때까지 기다리지 않고, 나머지 코드를 먼저 실행하는 것이다.
// 빠른 페이지 로딩을 위해 웹사이트 개발에 비동기 작업이 사용됨.
// promise : 비동기 함수의 결과를 담고있는 객체
// then() 체인을 길게 이어나가면 코드의 가독성이 떨어지고 에러 발생지점을 찾기 힘듬.
// promise의 단점을 보완하기 위해서 async/await 사용
// 함수 앞에 async를 붙이면, "이함수는 비동기적인 함수이며 promise를 반환한다"라고 선언하는것.
// await는 async 함수 안에서만 사용할 수 있는 문법이며,
// promise가 성공상태 또는 실패 상태로 바뀌기 전까지는 다음 연산을 시작하지 않는것이다.