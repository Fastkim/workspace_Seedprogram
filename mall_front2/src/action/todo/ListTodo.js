import {useEffect, useState} from 'react'
import {getTodos} from '../../api/todoApi'
import useTo from '../../page/useTo'

const ListTodo = () => {
    const [toGet, page,size, refresh] = useTo()
    const [response, setResponse] = useState(null)
    useEffect(() => {
        getTodos({page, size}).then(response => setResponse(response))
    }, [page, size, refresh])

    return (
        <div className='border-2 border-blue-100 mt-100 mr-2 ml-2'>
            <div className='flex flex-wrap mx-auto justify-center p-6'>
                {response ? response.items.map(todo =>
                    <div key={todo.todoNo}
                        className='w-full p-2 m-2 rounded shadow-md'
                        onClick={() => toGet(todo.todoNo)}>
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
        </div>
    )
}

export default ListTodo