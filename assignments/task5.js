const prompt = require('prompt-sync') ();
const marks = prompt("Enter your marks ");
if(marks < 60){
    console.log("F Grade");
}
else if(marks >= 60 && marks <70){
    console.log("Grade D");
}
else if(marks >= 70 && marks <80){
    console.log("Grade C")
}
else if(marks >= 80 && marks <90){
    console.log("Grade B")
}
else if(marks >= 90 && marks <100){
    console.log("Grade A")
}