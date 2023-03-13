var convertTemperature = function (celsius) {
  const kelvin = celsius + 273.15;
  const farenheit = celsius * 1.8 + 32.0;
  return [kelvin, farenheit];
};
