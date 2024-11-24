const reverseString = function(correctString) {

    const stringArray = correctString.split("");

    const invertedArray = stringArray.reverse();

    const invertedString = invertedArray.join("");

    return invertedString;

};

// Do not edit below this line
module.exports = reverseString;
