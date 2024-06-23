export default function Button() {
    function onClick() {
        alert('clicked.')
    }

    return <button onClick={onClick}>click me</button>
} // function을 callback으로 넘긴다.