var base58Check = require('base58-native').base58Check;
var bignum = require('bignum');

var stringToAddresses = require('./index.js');

var testAddresses = function(addresses) {
  console.log();
  console.log();
  console.log('String');
  console.log('---------');
  console.log(stringToAddresses.decodeFromAddressToString(addresses));
  console.log();
  console.log();
};

var testStrings = function(strings) {
  console.log();
  console.log();
  console.log('Addresses');
  console.log('---------');
  console.log(stringToAddresses.encodeFromStringToAddress(strings));
  console.log();
  console.log();
}

module.exports.testAddresses = testAddresses;
module.exports.testStrings = testStrings;