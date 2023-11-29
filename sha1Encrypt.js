// sha1Encrypt.js
const sha1 = require("sha1");

function encryptWithSha1(input) {
  return sha1(input);
}

module.exports = { encryptWithSha1 };
