import {Suspense, lazy} from 'react'
import {Navigate} from 'react-router-dom'

const Loading = <div>Loading...</div>
const TodoList = lazy(() => import('../page/todo/TodoList'))
const TodoGet = lazy(() => import('../page/todo/TodoGet'))
const TodoAdd = lazy(() => import('../page/todo/TodoAdd'))
const TodoFix = lazy(() => import('../page/todo/TodoFix'))

const todoRouter = () => {
    return [
        {
            path: 'list',
            element: <Suspense fallback={Loading}><TodoList/></Suspense>
        },
        {
            path: '',
            element: <Navigate replace to='list'/> //todo/emptyString이면 todo/list로 redirect
        },
        {
            path: 'get/:todoNo', //url을 variable로 표현하고싶을때, test: http://localhost/todo/get/1
            element: <Suspense fallback={Loading}><TodoGet/></Suspense>
        },
        {
            path: 'add',
            element: <Suspense fallback={Loading}><TodoAdd/></Suspense>
        },
        {
            path: 'fix/:todoNo',
            element: <Suspense fallback={Loading}><TodoFix/></Suspense>
        }
    ]
}

export default todoRouter