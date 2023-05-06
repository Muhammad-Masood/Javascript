// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json()) //converting http reponse into js object
//       .then(json => console.log(json))   //now consoling the return data

// fetch("https://jsonplaceholder.typicode.com/posts").then((response)=> response.json()).then((respObjs)=>console.log(respObjs));

const photosL = document.getElementById("photosList");
fetch("https://jsonplaceholder.typicode.com/photos").then((response)=> response.json())
.then( (responseObjects)=>{
   // for(let i = 0; i<responseObjects.length  ; i++){
        //if(i<)
    responseObjects.forEach((obj)=>{
        if(obj.albumId <= 5){
        photosL.innerHTML += `<li><img src = ${obj.url} height = 300px>`
        }
    });
});
    
    //(respObjs)=>console.log(respObjs));


// console.log(respObjs);
// respObjs.forEach(()=>{

// });