const palindromes = function (string) {
    let stringToLowerCase = string.replace(/[^\w]|_/g, "").replace(/\s/g, "").toLowerCase();
    let splitString = stringToLowerCase.split("");
    let reverseString = splitString.reverse();
    let rejoinString = reverseString.join("");
    console.log(rejoinString)
    return stringToLowerCase === rejoinString;
};

console.log(palindromes('A car, a man, a maraca.'));

// Do not edit below this line
module.exports = palindromes;
