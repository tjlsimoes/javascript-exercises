const repeatString = function(string, num) {

    if (num < 0) {
        return "ERROR";
    } else {
    
        const strings = [];

        for (let i = 0; i < num; i++) {
        strings.push(string);
        }

    return strings.join("");
    }


};

// Do not edit below this line
module.exports = repeatString;
