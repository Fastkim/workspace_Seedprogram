import {RouterProvider} from 'react-router-dom'
import rootRouter from './router/rootRouter'

function App() {
    return ( // tailwind css: react용 css 라이브러리
        <RouterProvider router={rootRouter}/> // App에서 router를 provider했으니 app의 자식 component는 router를 다 사용할수있다.
    )
}
// function과 export default를 분리해서 사용할수도 있다.
export default App