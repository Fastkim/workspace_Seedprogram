import {useState, useCallback} from 'react'
import {addTodo} from '../../api/todoApi'
import useTo from '../../page/useTo'

const AddTodo = () => {
    const [todo, setTodo] = useState({ // 초기에는 입력하는값이 없으므로 emptyString을 넣어준것이다.
        title: '',
        writer: '',
        dueDate: '',
    })
    const {toList} = useTo()

    const onChange = e =>  { // 즉 todo가 바뀐다는것(갱신되는것)은 title, wirter, dueDate라는 객체가 바뀌는것을 의미한다.
        todo[e.target.name] = e.target.value // input의 name값을 읽어오기, e.title
        setTodo({...todo})  // ...todo => title:'hello'(사용자입력), writer: '', dueDate: ''
                            // setTodo 로 객체 Todo를 바꿔야 갱신이 되는것이다.
    } // hello를 유저가 입력한다 치면 h/e/l/l/o 총 5번 화면을 한글자마다 계속 갱신해야한다.

    const onClickAdd = useCallback(() => addTodo(todo).then(toList), [todo])

    return (
        <div className='border-2 border-sky-200 mt-10 m-2 p-4'>
            {makeItem('title', todo.title, 'text', onChange)}
            {makeItem('writer', todo.writer, 'text', onChange)}
            {makeItem('dueDate', todo.dueDate, 'date', onChange)}
            <div className='flex justify-end'>
                <div className='relative mb-4 p-4 flex flex-wrap items-stretch'>
                    <button type='button'
                        className='rounded p-4 w-36 bg-blue-500 text-xl'
                        onClick={onClickAdd}>SAVE</button>
                </div>
            </div>
        </div>
    )
}

function makeItem (title, value, fieldType, onChange) {
    return (
        <div className='flex justify-center'>
            <div className='relative mb-4 flex flex-wrap w-full items-stretch'>
                <div className='w-1/5 p-6 text-right font-bold'>{title}</div>
                <input type={fieldType}
                    className='w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md'
                    name={`${title}`}
                    value={value}
                    onChange={onChange}/>
            </div>
        </div>
    )
}

export default AddTodo