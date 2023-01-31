var timer = document.getElementById("timer");
var mins;
var secs;

function checkTime(num) {
    if(num==0) return "00";
    else if(num<10) return "0"+num;
    else return num.toString();
}

function setPomo() {
    mins = 20;
    secs = 0;
    timer.innerHTML = `${mins}:${checkTime(secs)}`;
}

function setShort() {
    mins = 5;
    secs = 0;
    timer.innerHTML = `${mins}:${checkTime(secs)}`;
}

function setLong() {
    mins = 15;
    secs = 0;
    timer.innerHTML = `${mins}:${checkTime(secs)}`;
}