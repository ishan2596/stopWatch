var tens = 0;
var sec = 0;
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const counterSec = document.getElementById("sec");
const counterTens = document.getElementById("tens");
var interval;


// function to start the stopwatch
function startTimer(){
   tens++;

   if(tens < 9){
    counterTens.innerText = "0" + tens;
   }
   if(tens > 9){
    counterTens.innerText = tens;
   }
   if(tens > 99){
    sec++;
    counterSec.innerText = "0" + sec;
    tens = 0;
    counterTens.innerText = "0" + 0;
   }
   if(sec > 9){
    counterSec.innerText = sec;
   }



}

start.addEventListener("click",function(){
    interval = setInterval(startTimer);
});

stop.addEventListener("click",function(){
    clearInterval(interval);
});

reset.addEventListener("click",function(){
    clearInterval(interval);
    tens = 0;
    sec = 0;
    counterSec.innerText = "00";
    counterTens.innerText = "00";
});
