let count=0;
let decrease = document.querySelector("#dec")
let increase = document.querySelector("#inc")
let counter = document.querySelector(".counter")
let reset = document.querySelector("#reset")
let p = document.querySelector("p")
function updateColor(){
    if(count>=10){
        counter.classList.remove("high");
        counter.classList.add("high10")
    }
    else if(count >= 5){
        counter.classList.remove("high10")
        counter.classList.add("high");
    } else {
        counter.classList.remove("high10")
        counter.classList.remove("high");
    }
}
reset.addEventListener("click", function() {
    p.classList.add("hide")
    count=0;
    counter.textContent=count
    updateColor()
})
increase.addEventListener("click",function (){
    p.classList.add("hide")
    count+=1;
    counter.textContent=count
    updateColor()
})
decrease.addEventListener("click",function (){
    if(count>0){
        count--;
         counter.textContent=count
    }
    else p.classList.remove("hide")
    updateColor()
})