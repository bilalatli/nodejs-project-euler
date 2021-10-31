const primeFactors = require('./../utility/prime-factors');


const solve = () => {
    const factors = primeFactors(600851475143);
    factors.sort((a, b) => {
        return a - b;
    });
    return factors.pop();
};

console.log(`#3 Result : ${solve()}`);
