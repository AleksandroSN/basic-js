const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = "";
  let tempArr = [];
  let tempArr2 = [];

  const strRepeatTimes = options.repeatTimes > 0 ? options.repeatTimes : 1;
  const addition =
    options.addition !== undefined ? String(options.addition) : "";
  const additionRepeatTimes =
    options.additionRepeatTimes > 0 ? options.additionRepeatTimes : 1;
  const additionSeparator =
    options.additionSeparator == undefined ? "" : options.additionSeparator;
  const separator =
    options.separator == undefined ? "+" : String(options.separator);

  for (let i = 0; i < additionRepeatTimes; i++) {
    tempArr.push(addition);
  }

  for (let j = 0; j < strRepeatTimes; j++) {
    tempArr2.push(str + tempArr.join(additionSeparator));
  }

  return (result = tempArr2.join(separator));
};
