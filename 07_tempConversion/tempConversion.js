const convertToCelsius = function(fahrstart) {

  let celsiusend = (fahrstart - 32) * (5 / 9);
  let celsiusendround = (Math.round(celsiusend * 10)) / 10;

  return celsiusendround;
};

const convertToFahrenheit = function(celsiusstart) {

  let fahrend = (celsiusstart * (9 / 5)) + 32;
  let fahrendround = (Math.round(fahrend * 10)) / 10;

  return fahrendround;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

/*
Solution:

const convertToCelsius = function(fahrenheit) {
  return Math.round((fahrenheit - 32) * (5/9) * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  return Math.round(((celsius * 9/5) + 32) * 10) / 10;
};

*/
