import { createSearchParams, useSearchParams, useNavigate } from "react-router-dom"
import {useState} from 'react'

// 업무에 종속된게 아닌 utility 이므로 숫자 num이라고 표시 todoNo가 아닌
const getNum = (num, defaultNum) => {
    let result
    if(num) result = parseInt(num)
    else result = defaultNum
    return result
}

const useTo = () => {
    const [refresh, setRefresh] = useState(false) // List를 새로고침할지 정하는 flag
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
            query = createSearchParams({page, size}).toString() //쿼리스트링 만들어내고 그걸 string으로 변환
        } else query = queryDefault
        setRefresh(!refresh)
        

        navigate({
            pathname: '../list',
            search: query
        })
    }

    const toGet = num => navigate({
        pathname: `../get/${num}`, //templete string이므로 backtick 사용
        search: queryDefault //todo/get/13?page=3&size , queryDefault는 최신으로 계속 갱신됨
    })

    const toFix = num => navigate({
        pathname: `../fix/${num}`,
        search: queryDefault
    })

    return {toList, toGet, toFix, page, size, refresh}
}

export default useTo

// 소문자시작 파일이므로 UI(component)가 아니라 function을 만드는 파일의미
