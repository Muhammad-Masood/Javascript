// //Callbacks ko replace krega Promise

// const posts  = [
//     {
//         title:"Post One",
//         desc: "This is the description of Post One"
//     },
//     {
//         title:"Post Two",
//         desc: "This is the description of Post one"
//     }
// ];

// const getPosts = () => {
//     const postUl = document.getElementById("postList");
//     setTimeout(
//         ()=>{ //callback
//             for (const post in posts) {
//                 postUl.innerHTML += `<li>${posts[post].title}</li>`     
//             }
//             console.log("Posts Fetched!");
//         },1000) //delay of one second
//         // console.log("Posts Fetched!");
// }

// // const createPost = (_post) => {
// //     setTimeout(()=>{
// //         posts.push(_post);
// //     },2000);
// // }
// //createPost({title:"Post Three",desc:"This is the Description of Post Three"});
// //getPosts();
// // createPost({title:"Post Three",desc:"This is the Description of Post Three"}); //Executes after 2 sec, the timeout func will complete before this.


// //But what if we make timeout as a callback func????

// const createPost = (_post) => {
//     let error = false;
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//         posts.push(_post);
//         //callback();
//         //error = true;
//         !error?resolve():reject("Error Caught!");
//         console.log("Get Post called already!");
//         },2000);
//     })
// }
// // createPost({title:"Post Three",desc:"This is the Description of Post Three"})
// // .then(getPosts).catch(err=>console.log(err)); 
// //2 sec k baad Create post apna code run krdega aagy ka.
// //Jese hi get post ka set timeout complete hoga wo bolega bhai ab mera code run krdo.

// // const createPost = (_post) => {
// //         setTimeout(()=>{
// //         posts.push(_post);
// //         getPosts();
// //         console.log("Get Post called already!");
// //         },2000);   
// // }
// async function poost(){
//     await createPost({title:"sd",desc:"sdsd"});
//     getPosts();
// }

// poost();