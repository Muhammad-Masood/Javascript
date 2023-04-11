function add(closNum) {
    return function(num){
        return closNum+num;
    }
}
let newFunc = add(5);
console.log(newFunc(3));
