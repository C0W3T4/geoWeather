export function convertKelvinToCelsius(kelvin: number | undefined = 0) {

  if (typeof kelvin !== 'number')
    return 0;

  return (kelvin - 273.15).toFixed(0);
}
