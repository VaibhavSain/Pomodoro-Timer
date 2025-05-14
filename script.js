const min = document.querySelector("#min");
const sec = document.querySelector("#sec");
const startBtn = document.querySelector("#btn1");
const stopBtn = document.querySelector("#btn2");
const resetBtn = document.querySelector("#btn3");

let minutes = 25;
let seconds = 59;
let twich = false;
let speed  = 1000;
startBtn.addEventListener("click",() => {
     twich = false;
     timer();
});
resetBtn.addEventListener("click",() => {
    location.reload();
});
stopBtn.addEventListener("click",() => {
twich= true;
speed+=1000
})
function timer () {
     setInterval(() => {
        
        if(twich == false) {
        sec.innerText = seconds;
        seconds--;
        if(seconds == "0") {
            --minutes;
            seconds = 60;
            min.innerText = minutes;
        } 
        if(minutes == "0") {
            alert("time up");
        }
        sessionStorage.setItem(minutes,seconds);
    }
      },speed);
      console.log(speed)
}
