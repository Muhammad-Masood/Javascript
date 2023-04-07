const prompt = require('prompt-sync') ();
let temp = prompt("Enter number 1 ");
for (let index = 2; index <= 5; index++) {
    const num = prompt(`Enter number ${index} `);
    if(temp<num){
        temp = num;
    }
}
console.log(`Largest Number = ${temp}`);