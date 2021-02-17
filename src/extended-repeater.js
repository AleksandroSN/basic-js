const CustomError = require("../extensions/custom-error");

/*module.exports = function repeater(str, options) {
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
};*/

module.exports = function repeater(str, options) {
  let result = '';

  for (key in options) {
    switch (key) {
      case 'repeatTimes':
        if (options[key] === undefined) options[key] = 1;

        for (let i = 0; i < options[key]; i++) {

          if (options.separator === undefined) {
            result += `${str}+`;
          } else if (options.addition !== undefined) {
            result += `${str}`

            if (options.additionRepeatTimes === undefined) {
              options.additionRepeatTimes = 1;
              options.additionSeparator = !options.additionSeparator;
            }

            for (let j = 0; j < options.additionRepeatTimes; j++) {
              if (options.additionSeparator) {
                result += `${options.addition}${options.additionSeparator}`;
              } else result += `${options.addition}`
            }

            if (options.additionSeparator) {
              result = result.slice(0, -options.additionSeparator.length);
            }

            result += `${options.separator}`;

          } else if (options.separator) {
            result += `${str}${options.separator}`;
          }
        }
        continue;
    }
  }
  if (options.separator === undefined) {
    return result.slice(0, -1);
  } else
    return result.slice(0, -options.separator.length);
};
