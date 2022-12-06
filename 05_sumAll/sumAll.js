const sumAll = function(invalue, fivalue) {

    const range = [];

    if (isNaN(invalue) || invalue < 0 || 
        isNaN(fivalue)|| fivalue < 0 ||
        typeof invalue === "string" ||
        typeof fivalue === "string"){
        
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

/* 
Solution:

const sumAll = function(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  let sum = 0;
  for (let i = min; i < max + 1; i++) {
    sum += i;
  }
  return sum;
};

All around more elegant and simpler.
*/
// Do not edit below this line
module.exports = sumAll;
