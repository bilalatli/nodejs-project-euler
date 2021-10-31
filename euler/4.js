const isPalindrome = require('./../utility/palindrome');

const solve = () => {
    const max = 999;
    const min = 100;
    let highestPalindrome = 0;

    for (let i = 0; i < (max - min); i++) {
        const multiplier1 = (max - i);
        for (let j = 0; j < (max - min); j++) {
            const multiplier2 = (max - j);
            const multiply = multiplier1 * multiplier2;

            if (isPalindrome(multiply)) {
                if (highestPalindrome < multiply) {
                    highestPalindrome = multiply;
                } else {
                    // Break unnecessary loops
                    break;
                }
            }
        }
    }

    return highestPalindrome;
};

console.log(`#4 Result : ${solve()}`);
