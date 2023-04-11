function object(key,obj){
    objJson = JSON.stringify(obj);
    localStorage.setItem(key,objJson);
}
object("myObject",{name:"masood",rollNo:23,grade:"A"});
console.log(localStorage.getItem("myObject"));