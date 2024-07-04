// page에서는 정적(static)한 component를 둔다.
import Layout from "./Layout"

const Main = () => {
    return (
        <Layout>
            <div className='text-3xl font-extrabold'>
                <div>MAIN</div>
            </div>
        </Layout>
    )
}

export default Main