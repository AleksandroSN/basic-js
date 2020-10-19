const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // throw new CustomError('Not implemented');

  const cats = "^^";

  const newArr = matrix.reduce((acum, elem) => acum.concat(elem), []);

  let count = 0;

  newArr.forEach((elem) => {
    if (elem === cats) {
      count += 1;
    }
  });

  return count;
};
