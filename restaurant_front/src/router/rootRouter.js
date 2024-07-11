import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Main from '../page/main';
import Login from '../page/login';

const rootRouter = createBrowserRouter([
    {
        path: '/',
        element: <Suspense><Main/></Suspense>
    },
    {
        path: '/login',
        element: <Suspense><Login/></Suspense>
    }
])

export default rootRouter