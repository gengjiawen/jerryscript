const parser = require('xml2json');
const fs = require('fs');

const xml = fs.readFileSync("test262-es6-excludelist.xml");

// xml to json
var jsonString = parser.toJson(xml);
console.log(JSON.parse(jsonString).excludeList.test.length);
// fs.writeFileSync('output.json', jsonString)
// console.log("to json -> %s", jsonString);