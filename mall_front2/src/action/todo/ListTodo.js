import {useEffect, useState} from 'react'
import {getTodos} from '../../api/todoApi'
import useTo from '../../page/useTo'
import Paging from '../Paging'

const ListTodo = () => {
    const [refresh, setRefresh] = useState(false) // 삭제한목록이 새롭게 생성되어 만들게 하기위해 refresh라는 flag 넣ㅇ느것이다.
    const {toGet, toList, page, size} = useTo()
    const [response, setResponse] = useState(null) // 18번째줄에 삼항연산자로 null을 제외하는 로직없이 하고싶다면 null이 아닌 초기값을 설정해주면 되는것이다.
    useEffect(() => { // Effect은 function의 return이 실행된 이후에 작동하게 된다, useEffect은 rendering이 끝나고나서 진행된다.
        getTodos({page, size}).then(response => setResponse(response))
    }, [page, size, refresh])

    return (
        <div className='border-2 border-blue-100 mt-100 mr-2 ml-2'>
            <div className='flex flex-wrap mx-auto justify-center p-6'>
                {response ? response.items.map(todo =>
                    <div key={todo.todoNo}
                        className='w-full p-2 m-2 rounded shadow-md'
                        onClick={() => {
                            setRefresh(!refresh)
                            toGet(todo.todoNo)}}>
                        <div className='flex'>
                            <div className='text-2xl p-2 w-2/12'>
                                {todo.todoNo}
                            </div>
                            <div className='text-1xl m-1 p-2 w-2/12'>
                                {todo.title}
                            </div>
                            <div className='text-1xl m-1 p-2 w-3/12'>
                                {todo.dueDate}
                            </div>
                        </div>    
                    </div>
                ) : <></>}
            </div>
            {response ? <Paging response={response} toList={toList}/> : <></>}   
        </div>
    )
}

export default ListTodo