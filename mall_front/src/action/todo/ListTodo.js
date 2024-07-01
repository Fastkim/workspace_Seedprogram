import {useEffect, useState} from 'react'
import {getTodos} from '../../api/todoApi'
import useTo from '../../page/useTo'
import Paging from '../Paging'

const ListTodo = () => {
    const {toGet, toList, page, size, refresh} = useTo() //구조분해할당
    const [response, setResponse] = useState({
        items: [],
        pageNums: [],
        request: null,
        prev: false,
        next: false,
        currentPage: 0,
        prevPage: 0,
        nextPage: 0,
        totPageCnt: 0,
        totItemCtn: 0
    })

    useEffect(() => {
        getTodos({page, size}).then( response => setResponse(response))
    }, [page, size, refresh]) // 이 세가지가 안바뀌면 getTodos를 그대로 사용

    return (
        <div className='border-2 border-blue-100 mt-100 mr-2 ml-2'>
            <div className='flex flex-wrap mx-auto justify-center p-6'>
                {response.items.map(todo => 
                    <div key={todo.todoNo} 
                        className='w-full min-w-[400px] p-2 m-2 rounded shadow-md'
                        onClick={() => toGet(todo.todoNo)}>
                        <div className='flex'>
                            <div className='font-extrabold text-2xl p-2 w-1/12'>
                                {todo.todoNo}
                            </div>
                            <div className='font-extrabold text-1xl m-1 p-2 w-8/12'>
                                {todo.title}
                            </div>
                            <div className='font-medium text-1xl m-1 p-2 w-3/12'>
                                {todo.dueDate}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Paging response={response} toList={toList}/>
        </div>
    )
}

export default ListTodo