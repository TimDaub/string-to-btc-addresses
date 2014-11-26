var base58Check = require('base58-native').base58Check;
var bignum = require('bignum');

var s = "3Nelson-Mandela.jpg?";

var encodeFromStringToAddress = function(text) {
  var numbers = encodeFromStringToNumber(s);
  var hex = encodeFromDecToHex(numbers);
  var hexString = hex.join('');
  var addressNum = bignum(hexString, 16);
  var addressBuffer = Buffer.concat([new Buffer([0x00]), addressNum.toBuffer()]);

  var address = encodeHexToBase56Check(addressBuffer);

  return address;
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

console.log(encodeFromStringToAddress(s));