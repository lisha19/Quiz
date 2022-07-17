const key = require("crypto")
const key1 = key.randomBytes(32).toString('hex')
console.log(key1);