import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Main from '../page/main';

const rootRouter = createBrowserRouter([
    {
        path: '/',
        element: <Suspense><Main/></Suspense>
    }
])

export default rootRouter