const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //  throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!arr.length) return [];

  const discardPrev = "--discard-prev";
  const discardNext = "--discard-next";
  const doublePrev = "--double-prev";
  const doubleNext = "--double-next";

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case discardPrev:
        if (arr[i - 1] !== undefined && arr[i - 2] !== discardNext)
          result.pop();
        continue;
      case doublePrev:
        if (i && arr[i - 2] !== discardNext) result.push(arr[i - 1]);
        continue;
      case discardNext:
        i++;
        continue;
      case doubleNext:
        if (arr[i + 1] !== undefined) result.push(arr[i + 1]);
        continue;
      default:
        result.push(arr[i]);
    }
  }

  return result;
};
