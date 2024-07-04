import { RouterProvider } from "react-router-dom";
import rootRouter from "./router/rootRouter"

function App() { // 이렇게하면 모든 component에서 router사용가능
    return (
        <RouterProvider router={rootRouter}/>
    )
}

export default App