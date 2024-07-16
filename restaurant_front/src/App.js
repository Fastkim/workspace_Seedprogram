import {RouterProvider} from "react-router-dom";
import rootRouter from "./router/rootRouter";

function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`); //"--vh"라는 속성으로 정의해준다.
  }

window.addEventListener('resize', () => setScreenSize());

function App() {
    return (
        <RouterProvider router={rootRouter}/>
    )
}

export default App