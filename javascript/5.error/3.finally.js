function laugh(cnt) {
    if(cnt <= 0 || Math.trunc(cnt) != cnt)  // Math.trunc : 소수점 이하는 버리는 함수, 실수와 음수를 제거하는 조건
        throw new Error('반복 횟수는 자연수이여야 합니다.') // Syntax의 부모클래스는 Error 클래스

    let phrase = ''
    for(let i = 0; i < cnt; i++) phrase += 'ha '

    return phrase
}

let diff
let start = Date.now() // static 메서드

try {
    console.log(laugh(3))
    laugh(3.3)
} catch(e) {
    console.log(e.message)
} finally {
    diff = Date.now() - start
}

console.log(`작동 시간: ${diff}ms`)