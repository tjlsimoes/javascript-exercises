const sumAll = function(invalue, fivalue) {

    const range = [];

    if (invalue == NaN || invalue < 0 || fivalue == NaN || fivalue < 0){
        
        return "ERROR";
    } else if (invalue < fivalue) {

        for (i= invalue; i <= fivalue ; i++) {

            range.push(i);
        }
    
        let sum = 0;
    
        for (j = 0; j < range.length; j++) {
    
            sum += range[j];
        }
    
        return sum;
    } else if (invalue > fivalue) {

        for (i= fivalue; i <= invalue ; i++) {

            range.push(i);
        }
    
        let sum = 0;
    
        for (j = 0; j < range.length; j++) {
    
            sum += range[j];
        }
    
        return sum;
    }

};

// Do not edit below this line
module.exports = sumAll;
