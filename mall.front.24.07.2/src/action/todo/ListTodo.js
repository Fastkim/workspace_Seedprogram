// 동적인 부분은 동사형, 정적인부분은 명사형으로
import {useEffect, useState} from 'react'
import {getTodos} from '../../api/todoApi' // default 없이 export된것은 {}로 이름변경없이 import해야한다.
import useTo from '../../page/useTo'
import Paging from '../Paging'

const ListTodo = () => {
    const {toGet, toList, page, size} = useTo() //useTo가 return하는 객체를 받아온다.
    const [response, setResponse] = useState(null) // response의 초기값 null
    console.log('ListTodo', response)

    useEffect(() => {  //useEffect에 있는 내용은 return을 하고나서 실행하는거고 위에는 return 전에 실행하는것.
        getTodos({page, size}).then(response => setResponse(response))
    }, [page, size])

    return (
        <div className='border-2 border-blue-100 mt-100 mr-2 ml-2'>
            <div className='flex flex-wrap mx-auto justify-center p-6'>
                {response ? response.items.map(todo => 
                    <div key={todo.todoNo} //iterating을 할때 key가 있어야 react가 내부적으로 재활용할 컴포넌트를 찾아옴
                        className='w-full p-2 m-2 rounded shadow-md text-xl'
                        onClick={() => toGet(todo.todoNo)}>
                        <div className='flex'>
                            <div className='text-2xl p-2 w-2/12'>
                                {todo.todoNo}
                            </div>
                            <div className='text-2xl m-1 p-2 w-3/12'>
                                {todo.writer}
                            </div>
                            <div className='text-2xl m-1 p-2 w-7/12 text-end'>
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