import { createSearchParams, useSearchParams, useNavigate } from "react-router-dom" 
// createSearchParams: queryString을 만들기
// useSearchParams: queryString으로 파라미터 보내기
// useNavigate: 페이지를 강제로 이동시키는 함수.
import {useState} from 'react'

const getNum = (num, defaultNum) => {
    let result
    if(num) result = parseInt(num)
    else result = defaultNum
    return result
}

const useTo = () => {
    const [refresh, setRefresh] = useState(false)
    const navigate = useNavigate()
    const [query] = useSearchParams()
    const page = getNum(query.get('page'), 1)
    const size = getNum(query.get('size'), 5)
    const queryDefault = createSearchParams({page, size}).toString()

    const toList = param => {
        let query = ''
        if(param) {
            const page = getNum(param.page, 1)
            const size = getNum(param.size, 5)
            query = createSearchParams({page, size}).toString()
        } else query = queryDefault
        setRefresh(!refresh) // toList가 콜될때마다 매번 refresho 값을 바꾼다, 이전캐시를 쓰지않고 새롭게 갱신되는 값을 불러오기위해
        // queryDefault값이 매번 갱신할때마다 page size가 변한다.

        navigate({
            pathname: '../list',
            search: query
        })
    }

    const toGet = num => navigate({
        pathname: `../get/${num}`,
        search: queryDefault
    })

    return {toList, toGet, page, size, refresh} // 5개의 필드를 담은 객체를 만들어서 return하고 있다.
}

export default useTo