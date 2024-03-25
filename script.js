let select = document.getElementById('select')
let select2 = document.getElementById('select2')
let select3 = document.getElementById('select3')

for (let index = 0; index <= 23; index++) {
    select.innerHTML += `<option value="${index}"> ${index} </option>`
}
for (let index = 0; index <= 60; index++) {
    select2.innerHTML += `<option value="${index}"> ${index} </option>`
}


date = new Date()
// setInterval(() => {
//     date = new Date()
//     hour.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} ${select3.value}`
// }, 1000);

function setAlarm() {
    date = new Date()
    hour.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} ${select3.value}`

    if (select.value == '' && select2.value == '')  {
        alert("Set an alarm")
    }
    // setInterval(() => {
    //     date = new Date()
    //     hour.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} ${select3.value}`

    //     if (select.value == date.getHours() && select2.value == date.getMinutes()) {
    //         alert("It is working")
    //     }
    // }, 1000);
}

setInterval(() => {
    date = new Date()
    hour.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} ${select3.value}`

    if (select.value == date.getHours() && select2.value == date.getMinutes()) {
        alert("It is working")
    }
}, 1000);
