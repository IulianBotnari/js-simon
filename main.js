//creo 5 variabili per visualizzare i numeri casuali

let num1 = Math.floor(Math.random()*10 + 1)
let num2 = Math.floor(Math.random()*10 + 1)
let num3 = Math.floor(Math.random()*10 + 1)
let num4 = Math.floor(Math.random()*10 + 1)
let num5 = Math.floor(Math.random()*10 + 1)

document.getElementById("num1").innerHTML = num1
document.getElementById("num2").innerHTML = num2
document.getElementById("num3").innerHTML = num3
document.getElementById("num4").innerHTML = num4
document.getElementById("num5").innerHTML = num5
//faccio scomparire i 5 numeri dopo 30 secondi

setTimeout(clearRabdomNumber, 3000)

function clearRabdomNumber() {

document.getElementById("num1").innerHTML = null
document.getElementById("num2").innerHTML = null
document.getElementById("num3").innerHTML = null
document.getElementById("num4").innerHTML = null
document.getElementById("num5").innerHTML = null
}
    
