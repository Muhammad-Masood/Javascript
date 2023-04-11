const prompt = require('prompt-sync') ();
const num = prompt("Enter Number ");
if(num>=0)
console.log("The sign is +")
else
console.log("The sign is -")