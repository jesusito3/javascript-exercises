const sumAll = function(num1, num2) {
    let sum = 0;
    if (num1 < 0 || num2 < 0 || typeof(num1) !== "number" || typeof(num2) !== "number") {
        return "ERROR";
    }
    if(num1 < num2) {
        for (start = num1; start <= num2; start++) {
            sum += start;
        }
    }
    else {
        for(start = num1; start >= num2; start--) {
            sum += start;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
