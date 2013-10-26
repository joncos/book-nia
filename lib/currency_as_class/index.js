var Currency = function(canadianParity) {
    this.canadianParity = canadianParity;
}

Currency.prototype.roundTwoDecimals = function(amount) {
    return Math.round(amount * 100) / 100;
}

Currency.prototype.canadianToUs = function(canadian) {
    return this.roundTwoDecimals(canadian * this.canadianParity);
}

Currency.prototype.usToCanadian = function(us) {
    return this.roundTwoDecimals(us / this.canadianParity);
}

module.exports = Currency;