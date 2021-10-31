const sumRange = (min, max) => {
    let sum = 0;
    for (let i = min; i <= max; i++) sum += i;
    return sum;
};

const sumSquareRange = (min, max) => {
    let sum = 0;
    for (let i = min; i <= max; i++) sum += (Math.pow(i, 2));
    return sum;
};

const squareOfSumRange = (min, max) => {
    return Math.pow(sumRange(min, max), 2);
};

const hence = (min, max) => {
    return squareOfSumRange(min, max) - sumSquareRange(min, max);
};

const solve = () => {
    const min = 1;
    const max = 100;
    return hence(min, max);
};

console.log(`#6 Result : ${solve()}`);
