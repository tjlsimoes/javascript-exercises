const leapYears = function(year) {

    if (year % 4 === 0 && year % 100 === 0) {

        if (year % 400 == 0) {

            return true;
        } else {

            return false;
        }
    } else if (year % 4 === 0) {

        return true;
    } else {

        return false;
    }

};

/*
Solution:

const leapYears = function(year) {
  return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);
};

Again: simpler and more elegant.
*/

// Do not edit below this line
module.exports = leapYears;
