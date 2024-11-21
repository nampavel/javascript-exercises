const reverseString = function(string) {
    let myArray = string.split("");
    myArray.reverse();
    newArray = myArray.join("");
    return newArray;
};

// Do not edit below this line
module.exports = reverseString;
