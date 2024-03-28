function makeFn() {
    let userName = 'parker'

    function displayUserName() { // function declaration : 바로 함수값이 할당
        console.log(userName)
    }

    return displayUserName // return은 값을 복사하는 작업.
}

let myFn = makeFn()
myFn() // makeFn() 호출 le생성