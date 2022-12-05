const reverseString = function(string) {

    let strlength = string.length;

    const stringArr = string.split("");
    const revStringArr = [];


    for (i = 0; i < strlength; i++) {

        revStringArr[strlength - 1 - i] = stringArr[i];

    }

    let revwcomma = revStringArr.toString();

    let revwoutcomma = revwcomma.replaceAll(",", "");
    
    return revwoutcomma;
};

// Do not edit below this line
module.exports = reverseString;

/*

Solution:

There's a reverse function that can be applied to arrays!


const reverseString = function(string) {
 return string.split('').reverse().join('');
};


And this would work with strings that have commas in them!!


module.exports = reverseString;
*/
