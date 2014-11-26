Node.js: string-to-btc-addresses
==============================

This little script encodes a given text into valid bitcoin addresses that can later
be used as outputs in a transaction in order to save a message _forever_ in the blockchain.

This was inspired by [Ken Shirriff](http://www.righto.com/2014/02/ascii-bernanke-wikileaks-photographs.html). 


This package can be found on [npm](https://www.npmjs.org/package/string-to-btc-addresses).

## Usage

```
npm install string-to-btc-addresses --save-dev
```


In your application:

```
var stringToBtcAddresses = require('string-to-btc-addresses');

console.log(stringToBtcAddresses.encode('this is so romantic :heart:'));
```