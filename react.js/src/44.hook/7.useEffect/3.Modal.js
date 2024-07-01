import {useState, useEffect, useRef} from 'react'

function Modal({open, children}) {
    const ref = useRef()

    useEffect(() => {
        if(!open) return
        const dialog = ref.current
        dialog.showModal()
        return () => dialog.close() // setup 실행하기전에 청소
    }, [open])

    return <dialog ref={ref}>{children}</dialog>
}

export default function Main() {
    const [show, setShow] = useState(false)

    return (
        <>
            <button onClick={() => setShow(true)}>open</button>
            <Modal open={show}>
                HELLO <br/><br/>
                <button onClick={() => setShow(false)}>close</button>
            </Modal>
        </>
    )
}