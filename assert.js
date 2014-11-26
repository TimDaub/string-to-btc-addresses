var base58Check = require('base58-native').base58Check;
var bignum = require('bignum');

var decodeFromAddressToString = function(addressList) {
  var text = [];

  for(var i = 0; i < addressList.length; i++) {
    text.push(base58Check.decode(addressList[i]).toString());
  }

  return text.join('');

};

module.exports.decodeFromAddressToString = decodeFromAddressToString;