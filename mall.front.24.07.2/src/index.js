import React from "react";
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

//html객체가 있고 react객체가 있다. createRoot 최초의 react객체를 만드는데, 그때 html 객체를 이용해서 만든다.
ReactDOM.createRoot(document.getElementById('root')).render(<App/>) //App component가 return한것을 받는다.