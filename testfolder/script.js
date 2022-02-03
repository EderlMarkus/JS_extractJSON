const extractJSON = require('@ederlmarkus/extractjson');

const strings = [
  `my string that has a json-object like this: {"parameter": "value"}, and also one with several layers: {"parameter": {"parameter2":"10:10"}}`,
  'my string with a json inside: {parameter: "value"}',
  'this string has 2 jsons: first one is this: {x: 1, y: 2} and then this 2-level json: {a: 1, b: 2, c: {d: 4}, date: "10:10:10"}',
];

strings.map((string) => {
  console.log(extractJSON(string));
});
