import Layout from './Layout' // ./ 현재위치, ../ 상위경로, / 루트 : 상대경로

const Main = () => {
    return (
        <Layout>
            <div className='text-3xl font-extrabold'>
                MAIN
            </div>
        </Layout>
    )
}

export default Main