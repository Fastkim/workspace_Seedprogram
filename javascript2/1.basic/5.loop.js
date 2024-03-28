let i = 0
while( i < 2) { // 0번이상 실행
    console.log(`white: ${i + 10}`) // ``(back tick) dynamic한 String을 만들때 사용. 변하는 String 부분은 ${}로 표현
    i++
}

do {  // ex) 로그인 비밀번호 최소 한번은 입력해야함.
    console.log('do')
} while(false)

for(let i = 0; i < 2; i++) // 명령문이 하나라면 블록 {} 생략가능
    console.log(`for: ${i}`)


for(let i = 0; i < 5; i++) {
    if(i >= 2) break
    console.log(i)
}

