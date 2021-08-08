export function convertCelsiusToFahrenheit(celsius: number | undefined = 0) {

  if (typeof celsius !== 'number')
    return 0;

  return ((celsius * 9/5) + 32).toFixed(0);
}
