
const repeatString = function(string, num ) {
    let resultString = "";
    for (let i = 0; i < num; i++) {
        resultString += string
    }
    if (num < 0) {
        return "ERROR";
    } else {
    return resultString;
    }
}

repeatString('hey', 3)

// Do not edit below this line
module.exports = repeatString;
