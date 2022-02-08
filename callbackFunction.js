const mainFunction = (arr, callback) => {
    arr.push(100);
    callback();
}

const arr = [1,2,3,4,5];

mainFunction(arr, function() {
  console.log("you did it", arr);
});