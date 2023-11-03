const fibonacci = function(num) {
    if (num === 0) {
        return 0
    }

    if (num < 0) {
        return "OOPS"
    }

    let firstNum = 1
    let secondNum = 0

    for (let i=1; i <= num; i++) {
        let resultNum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = resultNum;
    }

    return secondNum
};

console.log(fibonacci(4))

// Do not edit below this line
module.exports = fibonacci;
