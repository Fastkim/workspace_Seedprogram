import {Outlet, useNavigate} from 'react-router-dom'
import Layout from '../Layout'
import {useCallback} from 'react'

const TodoIndex = () => {
    const navigate = useNavigate()
    // 파라미터를 받지않고 변화가없는 callback은 dependency를 []로 만들어 딱 한번만 만들어서 캐시에 저장해서 쓰게끔 하면된다.
    const onClickList = useCallback(() => navigate({pathname: 'list'}), []) 
    const onClickAdd = useCallback(() => navigate({pathname: 'add'}), []) // 링크 연결

    return (
        <Layout>
            <div className='w-full flex m-2 p-2'>
                <div className='text-xl m-1 p-2 w-20 font-extrabold text-center underline'
                    onClick={onClickList}>
                    LIST
                </div>
                <div className='text-xl m-1 p-2 w-20 font-extrabold text-center underline'
                    onClick={onClickAdd}>
                    ADD
                </div>
            </div>
            <div className='flex flex-wrap w-full'>
                <Outlet/>
            </div>
        </Layout>
    )
}

export default TodoIndex