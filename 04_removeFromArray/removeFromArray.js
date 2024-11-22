const removeFromArray = function(myArray, removingNumber) {
    let args = Array.from(removingNumber);
    let lArgs = args.length;
    let indexOfRemovingNumber = myArray.indexOf(args);
    myArray.splice(indexOfRemovingNumber, lArgs);
    return args;
};

// Do not edit below this line
module.exports = removeFromArray;
