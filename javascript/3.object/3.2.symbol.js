let age
function src() {
    let user = {
        userName: 'amanda'
    }

    a(user)
    b(user)
}

function a(user) {
    user[Symbol('age')] = 12
    console.log(user)
}

function b(user) {
    console.log(Object.keys(user))
    console.log(user.userName)
    console.log(user)
}

src()