//Promise 

// const runAfter1Sec = (_val) => {
//     return new Promise(function(resolve){
//         setTimeout(function(){
//         //console.log("Executed after 1 Second");
//         let val = 5+_val;
//         resolve(val);
// },1000);
//     }
//     );
// }

// runAfter1Sec(3).then(function(data){
//     console.log(data);
// })

//Async - Await

const runAfter1Sec = (func) => {
    setTimeout(function(){
        //console.log("Executed after 1 Second");
        val = 5+2;
        func(val);
},1000);
    
}
