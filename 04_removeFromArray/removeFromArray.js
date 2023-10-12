const removeFromArray = function(originalArray, ...elementsToRemove) {
    let newArray = [];
    originalArray.forEach(function (item) {
        if (!elementsToRemove.includes(item)) {
            newArray.push(item);
        }
    })
    return newArray;
}

removeFromArray([1,2,3,4,],[3,2])

// Do not edit below this line
module.exports = removeFromArray;
