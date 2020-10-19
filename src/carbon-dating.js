const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    typeof sampleActivity !== "string" ||
    sampleActivity <= 0 ||
    sampleActivity >= 15 ||
    isNaN(sampleActivity)
  ) {
    return false;
  } else {
    const ln = 0.693;
    const k = ln / HALF_LIFE_PERIOD;
    return Math.ceil(Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / k);
  }
};
