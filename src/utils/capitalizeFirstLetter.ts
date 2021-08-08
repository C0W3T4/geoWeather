export function capitalizeFirstLetter(str: string | undefined = '') {

  if (typeof str !== 'string')
    return '';

  return str.charAt(0).toUpperCase() + str.substr(1);
}