/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    const result = numbers.sort((a, b) => {
        if (a < b) return -1;
        if(a > b) return 1;
        return 0;
    });
    return result[result.length -1];
}

module.exports = findLargestElement;