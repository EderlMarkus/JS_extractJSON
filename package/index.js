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
        //sanatize whitespaces
        match = match.replace(/(?<={|,)([\s]+)(?=(.*?)(:))/g, "");
        //sanatize "relaxed" JSON without quotes
        const hasSingleQuotes = match.match(/(,)(.*?)(:)(|\s)(')/);
        const replaceText = hasSingleQuotes ? "'$4': " : '"$4": ';
        match = match.replace(
          /(?<=([{,])(|\s))(['"])?([a-z0-9A-Z_]+)(['"])?:/g,
          replaceText
        );
        return JSON.parse(match);
      } catch (error) {
        return null;
      }
    });
    return matches;
  }
}

module.exports = extractJSON;
