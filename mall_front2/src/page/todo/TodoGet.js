import {useParams} from 'react-router-dom'
import GetTodo from '../../action/todo/GetTodo'

const TodoGet = () => {
    const {todoNo} = useParams()

    return (
        <div className='p-4 w-full bg-white'>
            <GetTodo todoNo={todoNo}/>
        </div>
    )
}

export default TodoGet