console.log(Date()) // local 표준시
console.log(typeof Date()) //string

let date = new Date()
console.log(date)
console.log(typeof date)
console.log(date.toLocaleDateString()) // 년,월,일

// date = new Date('2022-08-23T07:27:30.999Z') // 지정할때, 그리니치천문대 시간(세계 기준시간)
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString()) // 시각을 나타낼때 , toLocale 지역시간

console.log(
    date.getFullYear(), // 년도
    date.getMonth(), // 월 (0 ~ 11)
    date.getDate(), // 일
    date.getUTCHours(), //UTC(Universal Time Coordinated) : 세계시간표준이 설정한시간 (0~23)
    date.getHours(), // localtime
    date.getMinutes(), // 분
    date.getSeconds(), // 초
    date.getMilliseconds(), // 밀리초
    date.getDay() // 요일 ( 0 : 일요일 ~ 6: 토요일)
)

/** timestamp */
console.log(date.getTime()) // 해당 날짜의 millisecond로 변환해서 나타낸다.
console.log(Date.now()) // 현재시각을 millisecond로 표현했을때 

date = new Date(0) // 기준시간
console.log(date)

date = new Date(1000 * 60 * 60 * 24) // 하루를 millisecond로 변환하면
console.log(date)

// 과제: 기준시간 하루 전으로 수정하라.
date = new Date(-(1000 * 60 * 60 * 24))
console.log(date)