function searchArray(array, value) {
    if (array[0] == value) {
      return true;
    } 
    else {
      return searchArray(array.slice(1), value);
    }
  }
console.log(searchArray([1,2,3,4,5],3));