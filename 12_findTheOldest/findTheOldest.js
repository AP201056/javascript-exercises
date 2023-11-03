const findTheOldest = function(array) {
   return array.reduce((oldest,current) => {
        const ageOldest = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const ageCurrent = getAge(current.yearOfBirth, current.yearOfDeath);
        return ageOldest < ageCurrent ? current : oldest
    });
    
}

function getAge(born,died) {
    let age;
    if (!died) {
        age = (new Date().getFullYear()) - born;
    } else {
        age = died - born;
        
    }

    return age;
};

// Do not edit below this line
module.exports = findTheOldest;
