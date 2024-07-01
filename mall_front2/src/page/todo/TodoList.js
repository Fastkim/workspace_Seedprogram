import { useSearchParams } from "react-router-dom"

const TodoList = () => {
    const [query] = useSearchParams() // 파라미터를 전달
    const page = query.get('page') ? parseInt(query.get('page')) : 1
    const size = query.get('size') ? parseInt(query.get('size')) : 5

    return (
        <div className='p-4 w-full bg-white'>
            <div className='text-3xl font-extrabold'>
                TodoList, {page} / {size}
            </div>
        </div>
    )
}

export default TodoList