import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy} from "react";
import todoRouter from './todoRouter';

// 프로젝트일때는 lazy를 사용하지 않아야한다.
const Loading = <div>Loading...</div> // lazy하는동안 시간이 좀 걸리므로 보여줄 Loading 문구
const Main = lazy(() => import('../page/Main')) // lazy function에서 import를 쓰면 해당import를 이 component를 사용할때 쓰지않고 해당 URL이 필요할때 불러온다는 의미
const About = lazy(() => import('../page/About'))
const TodoIndex = lazy(() => import('../page/todo/TodoIndex'))

const rootRouter = createBrowserRouter([ //Router는 react 문법이 아니고 javascript package이다.
    {
        path: '', //contextPath 이후의 URL을 적는것.
        element: <Suspense fallback={Loading}><Main/></Suspense> //Suspence : 식전빵(기다리는동안 loading 문구를 띄워라)
    },
    {
        path: 'about',
        element: <Suspense fallback={Loading}><About/></Suspense>
    },
    {
        path: 'todo',
        element: <Suspense fallback={Loading}><TodoIndex/></Suspense>,
        children: todoRouter() //todo/list => TodoIndex.js Outlet으로 간다, Outlet으로 router간에 부모자식간의 관계설정 가능
        //todoRouter.js의 todoRouter의 함수를 call한것이다. 하드코딩해도 되지만 모듈을 분리한것이다.
    }
])

export default rootRouter;