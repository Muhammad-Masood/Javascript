// //Promise 

// // const runAfter1Sec = (_val) => {
// //     return new Promise(function(resolve){
// //         setTimeout(function(){
// //         //console.log("Executed after 1 Second");
// //         let val = 5+_val;
// //         resolve(val);
// // },1000);
// //     }
// //     );
// // }

// // runAfter1Sec(3).then(function(data){
// //     console.log(data);
// // })

// //Async - Await

// const runAfter1Sec = (func) => {
//     setTimeout(function(){
//         //console.log("Executed after 1 Second");
//         val = 5+2;
//         func(val);
// },1000);
    
// }

// const task1 = new Promise((resolve, reject) => {
//     console.log("Hello New Here!");
//     resolve();
//     reject();
// })

const posts  = [
    {
        title:"Post One",
        desc: "This is the description of Post One"
    },
    {
        title:"Post Two",
        desc: "This is the description of Post one"
    }
];

const getPosts = () => {
    const postUl = document.getElementById("postList");
    setTimeout(
        ()=>{ //callback
            for (const post in posts) {
                postUl.innerHTML += `<li>${posts[post].title}</li>`     
            }
            console.log("Posts Fetched!");
        },1000) //delay of one second
        // console.log("Posts Fetched!");
}

// const createPost = (_post) => {
//     setTimeout(()=>{
//         posts.push(_post);
//     },2000);
// }
//createPost({title:"Post Three",desc:"This is the Description of Post Three"});
//getPosts();
// createPost({title:"Post Three",desc:"This is the Description of Post Three"}); //Executes after 2 sec, the timeout func will complete before this.


//But what if we make timeout as a callback func????

const createPost = (_post,callback) => {
    setTimeout(()=>{
        posts.push(_post);
        callback();
        console.log("Get Post called already!");
    },2000);
}

createPost({title:"Post Three",desc:"This is the Description of Post Three"},getPosts); 
//2 sec k baad Create post apna code run krdega aagy ka.
//Jese hi get post ka set timeout complete hoga wo bolega bhai ab mera code run krdo.




