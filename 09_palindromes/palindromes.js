const palindromes = function (str) {
    const array = str.toLowerCase().split("");
    const filteredArray = array.filter(isLetterOrNumber);
    const invertedArray = filteredArray.slice().reverse(); //reverse modificherebbe l'array originale, per questo entra in gioco slice
    if((filteredArray.length == invertedArray.length) && (invertedArray.every((value, index)=>(value === filteredArray[index])))){
        return true;
    }else {return false};
};

const isLetterOrNumber = function (char) {
    const code = char.charCodeAt(0);
    // Check for:
    // - Lowercase letters (a-z)
    // - Uppercase letters (A-Z)
    // - Digits (0-9)
    return (
        (code >= 48 && code <= 57) || // Numbers (0-9)
        (code >= 65 && code <= 90) || // Uppercase letters (A-Z)
        (code >= 97 && code <= 122)   // Lowercase letters (a-z)
    );
};

// Do not edit below this line
module.exports = palindromes;
