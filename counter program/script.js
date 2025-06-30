const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const count = document.getElementById("count");
let countValue = 0;
decrease.onclick=function(){
    countValue--;
    count.innerText = countValue;
}
increase.onclick=function(){
    countValue++;
    count.innerText = countValue;
}
reset.onclick=function(){
    countValue = 0;
    count.innerText = countValue;
}