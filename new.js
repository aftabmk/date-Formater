const epoch = 1394104654000;
const now = new Date (parseInt(epoch))
const seconds = now.getSeconds()
const minutes = now.getMinutes()
const hours= now.getHours()
const date = now.getDate() 
const month = now.getMonth()
const year = now.getFullYear()
const data = [{seconds,minutes,hours,date,date,month,year }]   
console.log(data )
