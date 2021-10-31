const isPalindrome = (str) => {
    const formattedString = str.toString().toLowerCase();
    const chars = formattedString.split('');
    const reversed = chars.reverse().join('');
    return reversed === formattedString;
};

module.exports = isPalindrome;
