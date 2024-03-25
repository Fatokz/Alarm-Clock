let select = document.getElementById('select')
let select2 = document.getElementById('select2')
let select3 = document.getElementById('select3')

// let hour = document.getElementById("hour")
// let minute = document.getElementById("minute")
// let second = document.getElementById("second")


for (let index = 0; index <= 23; index++) {
    select.innerHTML += `<option value="${index}"> ${index} </option>`
}
for (let index = 0; index <= 60; index++) {
    select2.innerHTML += `<option value="${index}"> ${index} </option>`
}
 for (let index = 0; index < index; index++) {
    select3.innerHTML = `<option value="${index}"> ${index} </option>`
 }


// setInterval(() => {
//     let date = new Date()
//     hour.innerHTML = date.getHours()
//     minute.innerHTML = date.getMinutes()
//     second.innerHTML = date.getSeconds()
//     // time.innerHTML = `${hour} : ${minutes} : ${seonds} ` 
// }, 1000);

// setInterval(() => {
//     date = new Date()
//     hour.innerHTML = date.getHours()
//     minute.innerHTML = date.getMinutes()
//     second.innerHTML = date.getSeconds()
//     // hour.innerHTML = `<h1>${hour} : ${minute} : ${second}</h1>`
// }, 1000);



date = new Date()
setInterval(() => {
    date = new Date()
    hour.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`

}, 1000);

function setAlarm() {
    hour = date.getHours()
    minute = date.getMinutes()
    second = date.getSeconds()

    if (select.value == hour && select2.value == minute) {
        alert("equal")
    }else{
        alert("!equal")
    }
}