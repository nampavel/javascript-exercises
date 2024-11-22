const sumAll = function(startingNum, endingNum ) {
    let finalSum = 0;
    let updatedStartingNum = 0;
    let updatedEndingNum = 0;

    
    if (startingNum > endingNum) {
        updatedStartingNum = endingNum;
        updatedEndingNum = startingNum;
        startingNum = updatedStartingNum;
        endingNum = updatedEndingNum;
    } 
    else if (startingNum < 0 || endingNum < 0) {
        return finalSum = "ERROR";
    } 
    else if (!Number.isInteger(startingNum) || !Number.isInteger(endingNum)) {
        return finalSum = "ERROR";
    } 
    while (startingNum > 0 && startingNum <= endingNum) {
        finalSum = finalSum + startingNum;
        startingNum++;
    }
    return finalSum;
 
};

// Do not edit below this line
module.exports = sumAll;
