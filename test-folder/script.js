const extractJSON = require("extractjson");

const str = `my string that has a json-object like this: {parameter: value}, and also one with several layers: {parmeter: level2: {value}}`;

console.log(extractJSON(str));
