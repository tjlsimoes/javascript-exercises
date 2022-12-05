const removeFromArray = function(arrayOr, tbremov) {

    function checkFtoL(matchone) {

        return matchone === tbremov;
    
    }
    
    function checkLtoF(matchlast) {
    
        return matchlast === tbremov;
    
    }

        
    let firstMatch = arrayOr.findIndex(checkFtoL);
    let lastMatch = arrayOr.lastIndexOf(checkLtoF);

    if (firstMatch === lastMatch) {

        return arrayOr.splice(arrayOr[firstMatch]);

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


/*
function checkFtoL(matchone) {

    return matchone === tbremov;

}

function checkLtoF(matchlast) {

    return matchlast === tbremov;

} 

*/
// Do not edit below this line
module.exports = removeFromArray;
