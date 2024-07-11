import {useEffect, useState, useCallback} from 'react'
import {getTodo, delTodo} from '../../api/todoApi'
import useTo from '../../page/useTo'
import DelModal from '../DelModal'

const GetTodo = ({todoNo}) => {
    console.log('GetTodo', todoNo)
    const {toList, toFix, page} = useTo()
    const [todo, setTodo] = useState({
        todoNo: 0, 
        writer: '',
        dueDate: '',
        done: false
    })

    const [del, setDel] = useState(false) // DelModal 띄울지 말지 선택 하는 플래그
    const [refresh, setRefresh] = useState(false)

    useEffect(() => { //useEffect의 실행횟수는 1회이상이다.
        console.log('GetTodo', 'useEffect')
        getTodo(todoNo).then(todo => {
            setTodo(todo)
            setRefresh(true)})
    }, [todoNo])

    const onClickDel = useCallback(() => setDel(true), [])
    const deleteTodo = useCallback(() => {
        delTodo(todoNo)
        toList()
    }, [todoNo])
    const close = useCallback(() => setDel(false), [])

    return (
        <div className='border-2 border-sky-200 mt-10 m-2 p-4'>
            {del ? <DelModal key={todoNo} close={close} del={deleteTodo}/> : <></>}
            {makeItem('no', todo.todoNo)}
            {makeItem('writer', todo.writer)}
            {makeItem('title', todo.title)}
            {makeItem('dueDate', todo.dueDate)}
            {makeItem('done', todo.done ? 'Y' : 'N')}
            <div className='flex justify-end p-4'>
                <button type='button'
                    className='rounded p-4 m-2 text-xl w-24 text-white bg-green-500'
                    onClick={() => toFix(todoNo)}>FIX</button>
                <button type='button' //자주쓰는건 최대한 오른쪽에 배치
                    className='rounded p-4 m-2 text-xl w-24 text-white bg-red-500'
                    onClick={onClickDel}>DEL</button>
                <button type='button'
                    className='rounded p-4 m-2 text-xl w-24 text-white bg-blue-500'
                    onClick={() => toList({page})}>LIST</button>
            </div>
        </div>
    )
}

function makeItem(title, value) {
    return (
        <div className='flex justify-center'>
            <div className='relative mb-4 w-full flex flex-wrap items-stretch'>
                <div className='w-1/5 p-6 text-right font-bold'>{title}</div>
                <div className='w-4/5 p-6 rounded border border-solid shadow-md'>{value}</div>
            </div>
        </div>
    )
}

export default GetTodo