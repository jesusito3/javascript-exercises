const leapYears = function(year) {
    if (year % 4 === 0 && year % 100 === 0) {
        if (year % 400 === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    else if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
};
//leapYear = true if divisible by 4
//leapYear = false if divisible by 100 unless also divisible by 400

// Do not edit below this line
module.exports = leapYears;
