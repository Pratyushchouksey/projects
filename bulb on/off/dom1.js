// 4 pillars od DOM 

// 1.selection of an element ---
// -->> var a = document.querySelector("h1")
// console.log(a)

// 2.changing HTML---
// var a = document.querySelector("h1")
// a.innerHTML = "changed HTML"

// 3. changing CSS---
// var a = document.querySelector("h1")
// a.style.color = "red"
// a.style.backgroundColor ="black"

// 4. Event Listener
// var a = document.querySelector("h1")
// a.addEventListener("click",function(){
//     a.innerHTML = "Badal gaya hu mai bhi teri ex ki tarah"
//     a.style.color = "yellow"
//     a.style.backgroundColor = "#000"
// })

// bulb wala program 

var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")

var flag = 0

btn.addEventListener("click",function(){
    if(flag == 0){
        bulb.style.backgroundColor = "yellow"
        console.log('cliocked')
        flag = 1   } 
        else{
            bulb.style.backgroundColor = "transparent"
            console.log("Again clieckedf")
            flag = 0
        }
    })

  
