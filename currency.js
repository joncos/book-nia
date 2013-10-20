var canadianDollarParity = 0.91;

function roundTwoDecimals(amount) {
    return Math.round(amount * 100) / 100;
}

exports.canadianToUS = function(amount) {
    return roundTwoDecimals(amount * canadianDollarParity);
}

exports.usToCanadian = function(amount) {
    return roundTwoDecimals(amount / canadianDollarParity);
}