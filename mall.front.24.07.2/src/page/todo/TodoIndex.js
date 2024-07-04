import {Outlet, useNavigate} from 'react-router-dom'
import {useCallback} from 'react'
import Layout from '../Layout'

const TodoIndex = () => {
    const navigate = useNavigate()
    const onClickList = useCallback(() => navigate({pathname: 'list'})) //usecallback은 특정 함수를 새로만들지않고 재사용하고싶을때 사용
    const onClickAdd = useCallback(() => navigate({pathname: 'add'}))

    return (
        <Layout>
            <div className='w-full flex m-2 p-2'>
                <div className='text-xl m-1 p-2 w-20 font-extrabold text-center underline'
                    onClick={onClickList}>LIST</div>
                <div className='text-xl m-1 p-2 w-20 font-extrabold text-center underline'
                    onClick={onClickAdd}>ADD</div>
            </div>
            <div className='flex flex-wrap w-full p-4 bg-white'>
                <Outlet/>
            </div>
        </Layout>
    )
}

export default TodoIndex