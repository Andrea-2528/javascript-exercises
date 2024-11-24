const removeFromArray = function(array, ...args) {

    return array.filter(checkedElement => !args.includes(checkedElement));          // .filter creates a new array, iterating on every element of the original array and checking a condition
                                                                                    // through a function to which it passes the element as first argument.
                                                                                    // If said condition is true (if the function returns true) it adds that element to the new array.
};                                                                                  // ARRAY.includes(VALUE) returns true when VALUE is inside ARRAY.
                                                                                    // So in this case if the checkedElement is included in the arguments (args), the function inside filter
// Do not edit below this line                                                      // returns false and the element is removed.
module.exports = removeFromArray;
