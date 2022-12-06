const sumAll = function(invalue, fivalue) {

    const range = [];

    for (i= invalue; i <= fivalue ; i++) {

        range.push(i);
    }

    let sum = 0;

    for (j = 0; j < range.length; j++) {

        sum += range[j];
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
