const reverseString = function(string) {

    let strlength = string.length;

    const stringArr = string.split("");
    const revStringArr = [];


    for (i = 0; i < strlength; i++) {

        revStringArr[strlength - 1 - i] = stringArr[i];

    }

    let revwcomma = revStringArr.toString();

    let revwoutcomma = revwcomma.replaceAll(",", "");

    // Can not simply remove spaces. Initial string can contain spaces!!
    


    return revwoutcomma;
};

// Do not edit below this line
module.exports = reverseString;
