let prevPhones = localStorage.getItem("phones");
let phones =  prevPhones?JSON.parse(prevPhones):[] //converting the json into object first and storing in array
function buildPhone(){
let phone = {
    model: prompt("Enter Model Number"),
    IMEI: prompt("Emter IMEI"),//adding + to allocate type in number
    color: prompt("Enter Colour")
}
phones.push(phone);
let jsonPhs = JSON.stringify(phones);
localStorage.setItem("phones",jsonPhs);
}
console.log(phones);