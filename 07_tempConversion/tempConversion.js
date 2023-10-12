const convertToCelsius = function(tempInF) {
  let convToC = (tempInF - 32) * (5/9);
  let roundConvToC = Math.round(convToC * 10) /10
  return roundConvToC;
};

const convertToFahrenheit = function(TempInC) {
  let convToF = TempInC * (9/5) + 32
  let roundConvToF = Math.round(convToF * 10) /10
  return roundConvToF;
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
