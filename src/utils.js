var CryptoJS = require("crypto-js");

async function md5(r) {
    var hash = CryptoJS.MD5(r);
    return hash.toString();
}

exports.md5 = md5;
