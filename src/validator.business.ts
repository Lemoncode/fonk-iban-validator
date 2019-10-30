export const sanitizeValue = (value: string): string =>
  value.replace(/\s/g, '').toUpperCase();

const ibanPattern = /^[a-zA-Z]{2}[a-zA-Z0-9]*$/;

export const hasIbanPattern = (value: any): boolean => ibanPattern.test(value);

const getCountry = (value: string): string => value.substring(0, 2);

const getIBANLengthByCountry = (value: string): number => {
  switch (value) {
    case 'AD':
      return 24;
    case 'AE':
      return 23;
    case 'AL':
      return 28;
    case 'AO':
      return 25;
    case 'AT':
      return 20;
    case 'AZ':
      return 28;
    case 'BA':
      return 20;
    case 'BE':
      return 16;
    case 'BF':
      return 27;
    case 'BG':
      return 22;
    case 'BH':
      return 22;
    case 'BI':
      return 16;
    case 'BJ':
      return 28;
    case 'BR':
      return 29;
    case 'BY':
      return 28;
    case 'CH':
      return 21;
    case 'CI':
      return 28;
    case 'CM':
      return 27;
    case 'CR':
      return 22;
    case 'CV':
      return 25;
    case 'CY':
      return 28;
    case 'CZ':
      return 24;
    case 'DE':
      return 22;
    case 'DK':
      return 18;
    case 'DO':
      return 28;
    case 'DZ':
      return 24;
    case 'EE':
      return 20;
    case 'ES':
      return 24;
    case 'FI':
      return 18;
    case 'FO':
      return 18;
    case 'FR':
      return 27;
    case 'GB':
      return 22;
    case 'GE':
      return 22;
    case 'GI':
      return 23;
    case 'GL':
      return 18;
    case 'GR':
      return 27;
    case 'GT':
      return 28;
    case 'HR':
      return 21;
    case 'HU':
      return 28;
    case 'IE':
      return 22;
    case 'IL':
      return 23;
    case 'IQ':
      return 23;
    case 'IS':
      return 26;
    case 'IR':
      return 26;
    case 'IT':
      return 27;
    case 'JO':
      return 30;
    case 'KW':
      return 30;
    case 'KZ':
      return 20;
    case 'LB':
      return 28;
    case 'LC':
      return 32;
    case 'LI':
      return 21;
    case 'LT':
      return 20;
    case 'LU':
      return 20;
    case 'LV':
      return 21;
    case 'MC':
      return 27;
    case 'MD':
      return 24;
    case 'ME':
      return 22;
    case 'MG':
      return 27;
    case 'MK':
      return 19;
    case 'ML':
      return 28;
    case 'MR':
      return 27;
    case 'MT':
      return 31;
    case 'MU':
      return 30;
    case 'MZ':
      return 25;
    case 'NL':
      return 18;
    case 'NO':
      return 15;
    case 'PK':
      return 24;
    case 'PL':
      return 28;
    case 'PS':
      return 29;
    case 'PT':
      return 25;
    case 'QA':
      return 29;
    case 'RO':
      return 24;
    case 'RS':
      return 22;
    case 'SA':
      return 24;
    case 'SC':
      return 31;
    case 'SE':
      return 24;
    case 'SI':
      return 19;
    case 'SK':
      return 24;
    case 'SM':
      return 27;
    case 'SN':
      return 28;
    case 'ST':
      return 25;
    case 'SV':
      return 28;
    case 'TN':
      return 24;
    case 'TL':
      return 23;
    case 'TR':
      return 26;
    case 'UA':
      return 29;
    case 'VG':
      return 24;
    case 'XK':
      return 20;
    default:
      return 0;
  }
};

export const hasValidLength = (value: string) => {
  const country = getCountry(value);
  const ibanLength = getIBANLengthByCountry(country);
  return ibanLength !== 0 && value.length === ibanLength;
};

const moveControlCodeToEnd = (value: string): string =>
  `${value.substring(4, value.length)}${value.substring(0, 4)}`;

const parseToNumber = (char: string): string =>
  (char.charCodeAt(0) - 55).toString();

const parseIBANToNumbers = (value: string): string =>
  value
    .split('')
    .reduce(
      (result, char) =>
        !isNaN(Number(char))
          ? `${result}${char}`
          : `${result}${parseToNumber(char)}`,
      ''
    );

const calculateReminder = (input: string): number => {
  let value: string = input;
  while (value.length >= 9) {
    const partial: string = value.substring(0, 9);
    const rest: string = value.substring(9);
    const num: number = Number(partial) % 97;
    value = `${num}${rest}`;
  }
  return Number(value) % 97;
};

export const isValidIBAN = (value: string) => {
  const rearrangedIBAN = moveControlCodeToEnd(value);
  const ibanNumber = parseIBANToNumbers(rearrangedIBAN);
  const remainder = calculateReminder(ibanNumber);
  return remainder === 1;
};
