const DelModal = ({close, del}) => {
    return ( // 모달부분
        <div className='flex top-0 left-0 h-full w-full
            justify-center bg-black bg-opacity-20' // 모달창에 뒤편에 있는거 확인
            onClick={close}>
            <div className='absolute bg-white shadow dark:bg-gray-700
                opacity-100 w-1/4 rounded ml-52 md-28 px-6 min-w-80'>
                <div className='justify-center bg-orange-400 mt-6 mb-6
                    text-2xl border-b-4 border-gray-500'/>
                    <div className='text-2xl border-orange-400 border-b-4 pt-4 pb-4'>
                        Want to delete?
                    </div>
                    <div className='justify-end flex'>
                        <button className='rounded bg-blue-500 mt-4 mb-4 px-6 pt-4
                            pb-4 text-white mr-3'
                            onClick={close}>NO</button>
                        <button className='rounded bg-red-500 mt-4 mb-4 px-6 pt-4
                            pb-4 text-white'
                            onClick={del}>YES</button>
                    </div>
            </div>
        </div>
    )
}

export default DelModal