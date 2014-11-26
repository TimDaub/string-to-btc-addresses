var base58Check = require('base58-native').base58Check;
var bignum = require('bignum');

var config = require('./config.json');
var assert = require('./assert.js');


var encodeFromStringToAddress = function(s) {
  var numbers = encodeFromStringToNumber(s);
  var hex = encodeFromDecToHex(numbers);

  var chunks = splitHexIntoChunks(hex);

  var addresses = encodeChunksToAddresses(chunks);

  return addresses;
};

var encodeChunksToAddresses = function(chunks) {
  var addresses = [];

  for(var i = 0; i < chunks.length; i++) {

    var hexString = chunks[i].join('');
    var addressNum = bignum(hexString, 16);
    var addressBuffer = Buffer.concat([new Buffer([0x00]), addressNum.toBuffer()]);

    addresses.push(encodeHexToBase56Check(addressBuffer));

  }

  return addresses;

};

// From: http://stackoverflow.com/a/8495740/1263876
var splitHexIntoChunks = function(hexArray) {
  var i, j, temparray, chunk = config.addressLength;
  var chunks = [];
  for(i = 0 , j = hexArray.length; i < j; i += chunk) {
    temparray = hexArray.slice(i, i + chunk);
    chunks.push(temparray);
  }

  // check last chunk for completion
  // fill with zeros
  var lastChunk = chunks[chunks.length-1];
  var j = lastChunk.length-1;
  while(lastChunk.length < config.addressLength) {
    lastChunk[j] = '00';
    j++;
  }

  return chunks;

};

var encodeHexToBase56Check = function(addressNum) {
  return base58Check.encode(addressNum);
}

var encodeFromStringToNumber = function(text) {
  var numbers = [];

  for(var i = 0; i < text.length; i++) {
    numbers.push(text.charCodeAt(i));
  }

  return numbers;

};

var encodeFromDecToHex = function(numbers) {
  var hex = [];

  for(var i = 0; i < numbers.length; i++) {
    hex.push(numbers[i].toString(16));
  }

  return hex;

};

// Itzy bitzy Assertion

var addresses = encodeFromStringToAddress(config.encode);

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
