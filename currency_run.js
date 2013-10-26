// var currency = require('./lib/currency');

// console.log('50 Canadian$ are ' + currency.canadianToUS(50) + ' US$');
// console.log('50 US$ are ' + currency.usToCanadian(50) + ' Canadian$');

var Currency = require('currency_as_class'),
    parity = 0.91;

currency = new Currency(parity);
console.log('50 Canadian$ are ' + currency.canadianToUs(50) + ' US$');
console.log('50 US$ are ' + currency.usToCanadian(50) + ' Canadian$');
