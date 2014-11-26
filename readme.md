Node.js: string-to-btc-addresses
==============================

This little script encodes a given text into valid bitcoin addresses that can later
be used as outputs in a transaction in order to save a message _forever_ in the blockchain.

this is so romantic :heart:

In order to use the script do this:

```
1. npm install string-to-btc-addresses --save-dev
```


In your application:

```
var stringToBtcAddresses = require('string-to-btc-addresses');

console.log(stringToBtcAddresses.encode('this is so romantic :heart:'));
```

