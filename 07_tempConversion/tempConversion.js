const convertToCelsius = function(degeeInFahreheit) {
  let celsiusConversion = (degeeInFahreheit - 32) * 5/9;
  return Math.round(celsiusConversion * 10) / 10;
};

const convertToFahrenheit = function(degreeInCelsius) {
  let fahrenheitConversion = (degreeInCelsius * 9/5) + 32;
  return Math.round(fahrenheitConversion *10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
