const reverseString = function(string) {

    let strlength = string.length;

    const stringArr = string.split("");
    const revStringArr = [];


    for (i = 0; i < strlength; i++) {

        revStringArr[strlength - 1 - i] = stringArr[i];

    }

    return revStringArr.toString();
};

// Do not edit below this line
module.exports = reverseString;
