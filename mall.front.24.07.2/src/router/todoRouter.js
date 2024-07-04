import { Suspense, lazy } from "react";
import {Navigate} from 'react-router-dom'

const Loading = <div>Loading...</div>
const TodoList = lazy(() => import('../page/todo/TodoList'))
const TodoGet = lazy(() => import('../page/todo/TodoGet'))
const TodoAdd = lazy(() => import('../page/todo/TodoAdd'))

const todoRouter = () => {
    return [
        {
            path: 'list',
            element: <Suspense fallback={Loading}><TodoList/></Suspense>
        },
        {
            path: '',
            element: <Navigate replace to='list'/> //Link component말고 Navigate component를 사용할 경우
        },
        {
            path: ':todoNo',
            element: <Suspense fallback={Loading}><TodoGet/></Suspense>
        },
        {
            path: 'add',
            element: <Suspense fallback={Loading}><TodoAdd/></Suspense>
        }
    ]
}

export default todoRouter