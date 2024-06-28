import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(<App/>) //HTML DOM을 ReactDOM으로 변환해서 사용
// App의 자식으로 두면 그밑에 컴포넌트 다 실행시킬수있음