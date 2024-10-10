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


let countDown = 10

let clock = setInterval(() => {
    if (countDown > 0 ){
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

document.getElementById("num1").innerHTML.style.color = "white"
document.getElementById("num2").innerHTML.style.color = "white"
document.getElementById("num3").innerHTML.style.color = "white"
document.getElementById("num4").innerHTML.style.color = "white"
document.getElementById("num5").innerHTML.style.color = "white"
}


//raccolgo i numeri inseriti in un array

let button = document.getElementById("button")
button.addEventListener("click", function (){
    
    let userNumArray = []
   
    let userNum1=document.getElementById("userNum1").value
    userNumArray.push(userNum1)
    let userNum2=document.getElementById("userNum2").value
    userNumArray.push(userNum2)
    let userNum3=document.getElementById("userNum3").value
    userNumArray.push(userNum3)
    let userNum4=document.getElementById("userNum4").value
    userNumArray.push(userNum4)
    let userNum5=document.getElementById("userNum5").value
    userNumArray.push(userNum5)

    let counter = 0
    let okNumbers = document.getElementById("okNumbers")
    for (let i=0; i<userNumArray.length; i++){
        let singleArrNum = userNumArray[i]
        if (singleArrNum == num1){
                counter++
                okNumbers.innerHTML = num1


        }
    
    }
    let result = document.getElementById("result")
    result.innerHTML = counter
} )








// if (userNumArray.includes(num1)){
//     counter++
//     okNumbers.innerHTML = num1
// } else if (userNumArray.includes(num2)){
//     counter++
//     result.innerHTML = num2
// } else if (userNumArray.includes(num3)){
//     counter++
//     result.innerHTML = num3
// } else if (userNumArray.includes(num4)){
//     counter++
//     result.innerHTML = num4
// }  else if (userNumArray.includes(num5)){
//     counter++
//     result.innerHTML = num5
// } 
    

