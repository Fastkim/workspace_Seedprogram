function Apple() {
    return <div>apple</div>
}

function Pear() {
    return <div>pear</div>
}

// component가 두 개 있다.

export default function Fruit() {
    let fruit
    let isPaid = true

    if(isPaid) fruit = <Apple/>
    else fruit = <Pear/>

    return <div>{fruit}</div>
}