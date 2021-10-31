const fibonacci = require('./../utility/fibonacci');

const solve = () => {
    let iterate = 0;
    let sum = 0;
    let fib = 1;
    do {
        iterate++;
        fib = fibonacci(iterate);
        sum += (fib % 2 === 0 ? fib : 0);
    } while (fib < 4000000);
    return sum;
};

console.log(`#2 Result : ${solve()}`);
