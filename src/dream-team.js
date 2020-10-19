const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    const dreamteam = members.filter((elem) => typeof elem === "string");
    return dreamteam
      .reduce(
        (final, current) =>
          final.concat(current.trim().toUpperCase().slice(0, 1)),
        []
      )
      .sort()
      .join("");
  } else {
    return false;
  }
};
