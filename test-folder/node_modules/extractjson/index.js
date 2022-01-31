/**
 * Returns an Array of JSON-Objects found in a string
 * @param {string} str the string you want to extract JSONs from
 * @param {int} levels how many levels in json should be searched?
 * @returns {array} array of jsons found in string
 */
function extractJSON(str, levels = 4) {
  let reg = "{(?:[^{}]|({(?:[^{}]|())*}))*}";
  for (let index = 1; index < levels; index++) {
    reg = reg.replace("()", "{(?:[^{}]|())*}");
  }
  reg = new RegExp(reg, "g");
  let matches = str.match(reg);
  if (matches) {
    matches = matches.map((match) => {
      try {
        return JSON.parse(match);
      } catch (error) {
        return null;
      }
    });
    return matches;
  }
}

module.exports = extractJSON;
