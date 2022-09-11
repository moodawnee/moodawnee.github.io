const clock = document.querySelector("#clock");

function getClock() {
    const hours = new Date().getHours().toString().padStart(2, "0");
    const minutes = new Date().getMinutes().toString().padStart(2, "0");
    const seconds = new Date().getSeconds().toString().padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);


const specialClock = document.querySelector("#specialClock");
const chooseDate = document.querySelector("#chooseDate");

//깔끔한 버전, 반대로 생각하기
function getSpecialTime(){
    const specialDate = new Date(`${chooseDate.value} 00:00:00`);
    const today = new Date();
    let calTime = Math.floor((specialDate.getTime() - today.getTime())/1000);

    const ss = (calTime%60).toString().padStart(2, "0");
    calTime = Math.floor(calTime/60);

    const mm = (calTime%60).toString().padStart(2, "0");
    calTime = Math.floor(calTime/60);

    const hh = (calTime%24).toString().padStart(2, "0");
    const dd = Math.floor(calTime/24);

    if(chooseDate.value === ""){
        specialClock.innerText = "000D 00H 00m 00s";
    }else{
        specialClock.innerText = `${dd}D ${hh}H ${mm}m ${ss}s`;
    }
}

getSpecialTime();
setInterval(getSpecialTime, 1000);


//더러운 버전 ㅎ
// function getSpecialTime(){
//     const specialDate = new Date(chooseDate.value);
//     const today = new Date();
//     const timeRemaining = specialDate.getTime() - today.getTime();

//     const dayRemaining = parseInt(timeRemaining/(1000*60*60*24));
//     const dayRest = timeRemaining%(1000*60*60*24);

//     const hourRemaining = parseInt(dayRest/(1000*60*60)).toString().padStart(2, "0");
//     const hourRest = dayRest%(1000*60*60);

//     const minutesRemaining = parseInt(hourRest/(1000*60)).toString().padStart(2, "0");
//     const minuteRest = hourRest%(1000*60);

//     const secondRemaining = parseInt(minuteRest/1000).toString().padStart(2, "0");

//     if(chooseDate.value === ""){
//         specialClock.innerText = "000D 00H 00m 00s";
//     }else{
//         specialClock.innerText = `${dayRemaining}D ${hourRemaining}H ${minutesRemaining}m ${secondRemaining}s`;
//     }
// }