export function convertKelvinToFahrenheit(kelvin: number | undefined = 0) {

  if (typeof kelvin !== 'number')
    return 0;

  return (9/5 * (kelvin - 273.15) + 32).toFixed(0);
}
