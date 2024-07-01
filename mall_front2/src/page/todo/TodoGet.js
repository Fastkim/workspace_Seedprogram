import {useParams} from 'react-router-dom'

const TodoGet = () => {
    const {todoNo} = useParams()

    return (
        <div className='text-3xl font-extrabold'>
            {todoNo}
        </div>
    )
}

export default TodoGet