function setGetObj(obj){
    for (const prop in obj) {
        localStorage.setItem(prop,JSON.stringify(obj[prop]));
    }
   const newObj = {};
    for (const prop in obj){
        newObj[prop] = JSON.parse(localStorage.getItem(prop)); 
    }
   return newObj;
}
console.log(setGetObj({name:"masma",pdjs:24322}));
