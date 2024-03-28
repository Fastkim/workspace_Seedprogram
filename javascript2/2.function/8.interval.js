let timeId = setInterval(() => console.log('tick'), 1000) //setInterval(function,delay)
// let timeId = setInterval(console.log , 1000, 'tick')


setTimeout(() => {
    console.log('stop.')
    clearInterval(timeId)
}, 3000)

 

