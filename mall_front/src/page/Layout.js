import Menu from './Menu'

const Layout = ({children}) => {
    // md:text-4xl': 반응형 md사이즈
    // flex-col: flex배치할때 세로로 배치하겠다.
    // space-y-4: margin 잡아주기
    // md:flex-row md:space-x-4: md사이즈가 되서 가로축으로 배치되면 가로로 마진을 준다.
    // md:w-2/3: md사이즈일때 width를 2/3로 잡겠다.
    // lg:w-3/4 px-5: lg사이즈일때 width를 3/4로 잡고 padding을 가로로 주겠다.
    // -5, -40 숫자값에 곱하기 40하면 픽셀값이 나옴, 나누기 4하면 rem값이나옴
    return (
        <>
            <Menu/>
            <div className='bg-white my-5 w-full flex flex-col space-y-1
                md:flex-row md:space-x-1 md:space-y-0'>
                <main className='bg-sky-300 md:w-4/5 lg:w-3/4 px-5 py-5'>
                    {children}
                </main>
                <aside className='bg-green-300 md:w-1/5 lg:w-1/4 px-5 py-5'>
                    <h1 className='text-2xl md:text-4xl'>
                        Sidebar
                    </h1>
                </aside>
            </div>
        </>
    )
}

export default Layout