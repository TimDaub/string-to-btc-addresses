var base58Check = require('base58-native').base58Check;
var bignum = require('bignum');

var config = require('./config.json');
var stringToAddresses = require('./index.js');


var decodeFromAddressToString = function(addressList) {
  var text = [];

  for(var i = 0; i < addressList.length; i++) {
    text.push(base58Check.decode(addressList[i]).toString());
  }

  return text.join('');

};

var logAssertion = function() {

  var addresses = stringToAddresses.encodeFromStringToAddress(config.encode);

  console.log();
  console.log();
  console.log('Addresses');
  console.log('---------');
  console.log(addresses);

  console.log();
  console.log();
  console.log();

  console.log('String');
  console.log('---------');
  console.log(assert.decodeFromAddressToString(addresses));
  console.log();
  console.log();

};

logAssertion();