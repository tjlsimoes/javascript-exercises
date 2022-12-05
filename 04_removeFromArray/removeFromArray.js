const removeFromArray = function (arrayOr, tbremov) {

    if (arrayOr.includes(tbremov)) {

        let tbremovind = arrayOr.lastIndexOf(tbremov);

        arrayOr.splice(tbremovind, 1);
        return arrayOr;
    } else {
        return arrayOr;
    }
};


/*
const removeFromArray = function(arrayOr, tbremov) {

    function checkFtoL(matchone) {

        return matchone === tbremov;
    
    }
    

        
    let firstMatch = arrayOr.findIndex(checkFtoL);
    let lastMatch = arrayOr.lastIndexOf(tbremov);

    if (firstMatch === lastMatch) {

        return arrayOr.splice(firstMatch);

    } else if (firstMatch !== lastMatch){

        let arrayOrLeng = arrayOr.length;

        for (i = 0; i < arrayOrLeng; i++ ) {

            if(arrayOr[i] == tbremov) {

                arrayOr.splice(i);
            }
        }

        return arrayOr;

    } else {

        return arrayOr;
    }
};
*/
// Do not edit below this line
module.exports = removeFromArray;
