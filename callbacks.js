//Koi bhi funciton jo hm kaam krny k baad run krty hain, to tell that our work has been completed

//Callbacks
const runAfter1Sec = (func) => {
    setTimeout(function(){
        //console.log("Executed after 1 Second");
        val = 5+2;
        func(val);
},1000);  
}

function runWhenTaskIsDone(_val){
    console.log("Task Done!",_val);
}
runAfter1Sec(runWhenTaskIsDone);
console.log("Hello!");