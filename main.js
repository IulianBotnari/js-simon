//creo 5 variabili per visualizzare i numeri casuali

let num1 = Math.floor(Math.random() * 100 + 1)
let num2 = Math.floor(Math.random() * 100 + 1)
let num3 = Math.floor(Math.random() * 100 + 1)
let num4 = Math.floor(Math.random() * 100 + 1)
let num5 = Math.floor(Math.random() * 100 + 1)



document.getElementById("num1").innerHTML = num1
document.getElementById("num2").innerHTML = num2
document.getElementById("num3").innerHTML = num3
document.getElementById("num4").innerHTML = num4
document.getElementById("num5").innerHTML = num5


let countDown = 10

let clock = setInterval(() => {
    if (countDown > 0) {
        --countDown
        document.getElementById("countDown").innerHTML = countDown

    } else {
        document.querySelector(".w-25").className = "d-flex"
        clearInterval(clock)
    }

}, 1000);


//faccio scomparire i 5 numeri dopo 30 secondi

setTimeout(clearRabdomNumber, 10000)

function clearRabdomNumber() {

    document.getElementById("num1").innerHTML = null
    document.getElementById("num2").innerHTML = null
    document.getElementById("num3").innerHTML = null
    document.getElementById("num4").innerHTML = null
    document.getElementById("num5").innerHTML = null
}


//raccolgo i numeri inseriti in un array

let button = document.getElementById("button")
button.addEventListener("click", function () {

    let userNumArray = []

    let userNum1 = document.getElementById("userNum1").value
    userNumArray.push(userNum1)
    let userNum2 = document.getElementById("userNum2").value
    userNumArray.push(userNum2)
    let userNum3 = document.getElementById("userNum3").value
    userNumArray.push(userNum3)
    let userNum4 = document.getElementById("userNum4").value
    userNumArray.push(userNum4)
    let userNum5 = document.getElementById("userNum5").value
    userNumArray.push(userNum5)

    let counter = 0
    let ok1 = document.getElementById("ok1")
    let ok2 = document.getElementById("ok2")
    let ok3 = document.getElementById("ok3")
    let ok4 = document.getElementById("ok4")
    let ok5 = document.getElementById("ok5")
    for (let i = 0; i <= userNumArray.length; i++) {
        let singleArrNum = userNumArray[i]
        if (singleArrNum == num1) {
            counter++
            ok1.innerHTML = num1
        } else if (singleArrNum == num2) {
            counter++
            ok2.innerHTML = num2
        } else if (singleArrNum == num3) {
            counter++
            ok3.innerHTML = num3
        } else if (singleArrNum == num4) {
            counter++
            ok4.innerHTML = num4
        } else if (singleArrNum == num5) {
            counter++
            ok5.innerHTML = num5
        }

    }
    let result = document.getElementById("result")
    result.innerHTML = counter
})








