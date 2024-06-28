import { useReducer } from 'react'

export default function Age() {
    const [state, dispatch] = useReducer(reducer, {age: 22})

    return ( //dispatch의 객체를 action이라고 부른다. type의 키에 action의 명칭을 넣는다.
        <>
            <button onClick={() => dispatch({type: 'plustAge'})}> 
                plus age
            </button>
            <p>you are {state.age}</p>
        </>
    )
}

function reducer(state, action) {
    if(action.type === 'plusAge')
        return {age: state.age + 1}
    throw Error('unknown state')
}