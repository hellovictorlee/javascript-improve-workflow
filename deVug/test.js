const { runTest } = require("./deVug.js");

module.exports = async input => {
  return runTest(input);
};

module.exports(0).then(console.log);
