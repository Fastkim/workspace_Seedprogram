import {useReducer} from 'react'

// useState로 setter를 하지않고 setter를 직접만들고 싶을때
// useReducer를 사용한다, Reducer가 setter랑 동의어

export default function User() { 
    // user가 state이다, reducer한테 넘겨줄때 dispatch 파라미터로 넘겨주고 dispatch가 데이터를 reducer한테 전해준다.
    const [user, dispatch] = useReducer(reducer, {
        username: 'taylor',
        age: 22
    })

    function onClick() {
        dispatch({type: 'plusAge'})
    }

    function onChange(e) {
        dispatch({ 
            // dispatch에 파라미터를 넘겨줄때 객체를 넘겨준다. 그리고 이데이터 객체는 reducer가 이용한다.
            type: 'fixUsername',
            nextUsername: e.target.value
        })
    }

    return (
        <>
            <input value={user.username} onChange={onChange}/>
            <button onClick={onClick}>plus age</button>
            <p>hello, {user.username}. You are {user.age}.</p>
        </>
    )
}

// reducer는 파라미터를 2개받는다.
// 첫번째는 state(user)를, 두번째는 dispatch가 전달한 객체 이를 action이라고 함
// reducer는 알고리즘 문법상 return이 반드시 있어야한다.
// 그리고 이 return한 값으로 user값을 바꾸는것이다.
function reducer(user, action) {
    let man

    switch(action.type) {
        case 'plusAge': man = {
            ...user, // state 자체를 바꿔야한다.
            age: user.age + 1
        }; break
        case 'fixUsername': man = {
            ...user,
            username: action.nextUsername
        }; break
        default: throw Error('unKnown action ' + action.type)
    }

    return man
}