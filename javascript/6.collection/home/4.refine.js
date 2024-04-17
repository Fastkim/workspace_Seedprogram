// 과제:
// refine() 이 정제된(중복 제거된) 배열을 return 하도록 하라.

let user = {userName: 'scott'}
let fn = () => 1
let arr = ['ucal', user, 'toby', fn, 'ucal', 1, 1, fn]

function refine(arr) {
    set = new Set(arr) // set 객체로 만들어서 중복제거
    arr = Array.from(set) // 중복제거된 데이터를 array 객체로 변환
    return arr
}

// 원목님 solution
// function refine(arr) {
//     // return Array.from(new Set(arr))
//     return [...new Set(arr)]
// }

console.log(refine(arr)) // ['ucal', {userName: 'scott'}, 'toby', [fuction: fn], 1]