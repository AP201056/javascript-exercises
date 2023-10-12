const reverseString = function(word) {
let splitString = word.split("");
let reversedArray = splitString.reverse();
let joinedArry = reversedArray.join("");
return joinedArry;
};

reverseString("hello there")
// Do not edit below this line
module.exports = reverseString;
