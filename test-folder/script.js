const extractJSON = require("extractjson");

const str = `[{"blz":"32447","antrag":{"antragsId":"DEB-146671","kundenNummer":"88202148"}}]`;

console.log(extractJSON(str));
