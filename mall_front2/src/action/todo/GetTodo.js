import {useEffect, useState, useCallback} from 'react'
import {getTodo, delTodo} from '../../api/todoApi'
import useTo from '../../page/useTo'
import DelModal from '../DelModal'

const GetTodo = ({todoNo}) => {
    const [del, setDel] = useState(false)  //del 값이 true이면 모달띄워주고 false이면 안띄워주고
    const {toList, toFix, page} = useTo()
    const [todo, setTodo] = useState({ //초기값
        todoNo: 0,
        writer: '',
        dueDate: '',
        done: false
    })

    useEffect(() => {
        getTodo(todoNo).then(todo => setTodo(todo))
    }, [todoNo])

    const onClickDel = useCallback(() => setDel(true), []) 
    // useCallback을 안쓰면 GetTodo가 call될때마다 onClickDel이 매번만들어져서 할당되는것이다.
    // useCallback으로 캐시에 두고 과거에 만들었던것을 저장해두고 onClick할때 할당하면된다.
    const deleteTodo = useCallback(() => {
        delTodo(todoNo)
        toList()
    }, [todoNo]) // todoNo가 바뀔때마다 첫번째파라미터를 재실행
    const closeModal = useCallback(() => setDel(false), [])

    return (
        <div className='border-2 border-sky-200 mt-10 m-2 p-4'>
            {del ? <DelModal key={todoNo} close={closeModal} del={deleteTodo}/> : <></>}
            {makeItem('번호', todo.todoNo)}
            {makeItem('작성자', todo.writer)}
            {makeItem('제목', todo.title)}
            {makeItem('기한', todo.dueDate)}
            {makeItem('완료', todo.done ? 'Y' : 'N')}
            <div className='flex justify-end p-4'>
                <button type='button'
                    className='rounded p-4 m-2 text-xl w-32 text-white bg-green-500'
                    onClick={() => toFix(todoNo)}>FIX</button>
                <button type='button'
                    className='rounded p-4 m-2 text-xl w-32 text-white bg-red-500'
                    onClick={onClickDel}>DEL</button>
                <button type='button'
                    className='rounded p-4 m-2 text-xl w-32 text-white bg-blue-500'
                    onClick={() => toList({page})}>LIST</button> 
            </div>
        </div>
        // () => toList({page}) function을 할당
        // toList() : function을 콜한것
        // toList : function을 할당

    )
}

const makeItem = (title, value) =>
    <div className='flex justify-center'>
        <div className='relative mb-4 w-full flex flex-wrap items-stretch'>
            <div className='w-1/5 p-6 text-right font-bold'>{title}</div>
            <div className='w-4/5 p-6 rounded border border-solid shadow-md'>{value}</div>
        </div>
    </div>

export default GetTodo