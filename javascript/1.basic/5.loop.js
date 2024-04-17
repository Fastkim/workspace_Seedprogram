let i = 0
while( i < 2) { // 0번 이상 실행
    console.log(`white: ${i + 10}`) // ``(back tick) 다이내믹한 String을 만들때 사용. 변하는 String부분은 ${}로 표현
    i++
}

do { // 1번 이상 실행
    console.log('do')
} while(false)

for(let i = 0; i < 2; i++) // 명령문이 하나라면 블록 {} 생략가능
    console.log(`for: ${i}`)


for(let i = 0; i < 5; i++) {
    if(i >= 2) break
    console.log(i)
}
