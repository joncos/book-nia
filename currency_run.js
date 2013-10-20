var currency = require('./currency');

console.log('50 Canadian$ are ' + currency.canadianToUS(50) + ' US$');
console.log('50 US$ are ' + currency.usToCanadian(50) + ' Canadian$');