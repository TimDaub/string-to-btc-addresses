var base58Check = require('base58-native').base58Check;
var bignum = require('bignum');

var encodeFromStringToAddress = function(s, addressLength) {
  var numbers = encodeFromStringToNumber(s);
  var hex = encodeFromDecToHex(numbers);

  var chunks = splitHexIntoChunks(hex, addressLength);

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
// 
// Default addresslength is 20
var splitHexIntoChunks = function(hexArray, addressLength) {
  var i, j, temparray, chunk;
  var chunks = [];

  if(!addressLength) {
    chunk = addressLength = 20;
  }

  for(i = 0 , j = hexArray.length; i < j; i += chunk) {
    temparray = hexArray.slice(i, i + chunk);
    chunks.push(temparray);
  }

  // check last chunk for completion
  // fill with zeros
  var lastChunk = chunks[chunks.length-1];
  var j = lastChunk.length-1;
  while(lastChunk.length < addressLength) {
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

module.exports.encode = encodeFromStringToAddress;