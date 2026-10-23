// let headingEl = document.getElementById("heading");

// headingEl.style.color = "red";
// // background-color:"red"
// headingEl.style.backgroundColor="blue"
// headingEl.textContent = "qwertyuiop" // change the content of that element
// headingEl.innerHTML += "<h2>hello this is a new element </h2>"
// let headingEl = document.getElementsByClassName("headingclass");


let headingEl = document.querySelector("#heading");
let btnEl = document.querySelector("#btn");
let btnDecEl = document.querySelector("#btndec")
let btnResetEl = document.querySelector("#btnreset")
let boxEl = document.querySelector(".box")


let count =0

// inc logic
btnEl.addEventListener("click",()=>{
    count++;
    headingEl.textContent = count
})

// dec logic
btnDecEl.addEventListener("click",()=>{
    count--;
    headingEl.textContent = count
})
// reset logic
btnResetEl.addEventListener("click",()=>{
    count=0;
    headingEl.textContent = count
})


boxEl.addEventListener("mouseover",()=>{
   
     let arr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
   
    let ans = "#";
   
    for(let i=0; i<6; i++){
        let randomValue = Math.floor(Math.random()*15); // 0-15
        ans += arr[randomValue];
    }

    boxEl.style.backgroundColor= ans;
})






console.log(headingEl)
console.log("hello")