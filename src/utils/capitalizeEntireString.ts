export function capitalizeEntireString(str: string | undefined = '') {

  if (typeof str !== 'string')
    return '';

  return str.toUpperCase();
}
