export function convertFahrenheitToCelsius(fahrenheit: number | undefined = 0) {

  if (typeof fahrenheit !== 'number')
    return 0;

  return ((fahrenheit - 32) * 5/9).toFixed(0);
}
