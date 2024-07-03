import {useParams} from 'react-router-dom'
import FixTodo from '../../action/todo/FixTodo'

const TodoFix = () => {
    const {todoNo} = useParams()

    return (
        <div className='p-4 w-full bg-white'>
            <FixTodo todoNo={todoNo}/>
        </div>
    )
}

export default TodoFix