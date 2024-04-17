// let timeId = setInterval(() => console.log('tick'), 1000)   //setInterval(function,delay)
let timeId = setInterval(console.log, 1000, 'tick') // 

setTimeout(() => {
    clearInterval(timeId)
    console.log('stop.')
}, 3000)