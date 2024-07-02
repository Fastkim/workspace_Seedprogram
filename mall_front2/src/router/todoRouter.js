import {Suspense, lazy} from 'react'
import {Navigate} from 'react-router-dom'

const Loading = <div>Loading...</div>
const TodoList = lazy(() => import('../page/todo/TodoList'))
const TodoGet = lazy(() => import('../page/todo/TodoGet'))

const todoRouter = () => {
    return [
        {
            path: 'list',
            element: <Suspense fallback={Loading}><TodoList/></Suspense>
        },
        {
            path: '',
            element: <Navigate replace to='list'/>
        },
        {
            path: 'todoNo',
            element: <Suspense fallback={Loading}><TodoGet/></Suspense>
        }
    ]
}

export default todoRouter