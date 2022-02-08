for(var i = 0; i <= 100;i++) {
    let f = i % 3 == 0;
    let b = i % 5 == 0;
    console.log(f ?(b ? "FizzBuzz": "Fizz"):b ? "Buzz": i);
}