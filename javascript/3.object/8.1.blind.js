let user = {
    userName: 'madonna',
    greet() {
        console.log(`I am ${this.userName}`)
    }
}

user.greet()

//
setTimeout(user.greet(), 100)

setTimeout(() => user.greet(), 200) // 첫번째 파라미터에 콜백을 넣었더니 해결되었다.