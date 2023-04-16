// const date = new Date();
// console.log(date.getDate());
// console.log(date);
// console.log(date.getTime());
// let timeInMilliSec = date.getTime();
// let milliToMin = (timeInMilliSec/(1000*60*60*24*365));
// console.log(milliToMin+" years");

const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");
const amPm = document.getElementById("amPm");
setInterval(() => {
const date = new Date();
if(date.getHours()>11){
    amPm.innerText = " AM";
}
else{
    amPm.innerText = " PM";
}
if(date.getHours()>12){
hours.innerText = date.getHours()-12;
}
mins.innerText = date.getMinutes();
secs.innerText = date.getSeconds();
},1000);
