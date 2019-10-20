import {
  FieldValidationFunctionSync,
  parseMessageWithCustomArgs,
} from '@lemoncode/fonk';
import { getLengthCountry } from './switchCountry';
import { isUndefined } from 'util';
import { is } from '@babel/types';

const VALIDATOR_TYPE = 'IBAN';

let defaultMessage = 'Invalid IBAN';

export const setErrorMessage = message => (defaultMessage = message);

const isDefined = value => value !== void 0 && value !== null && value !== '';

const ibanPattern = /^[a-zA-Z]{2}[a-zA-Z0-9]*$/;

const isString = (input: any) =>
  typeof input === 'string' || input instanceof String;
const setupString = (input: string): string =>
  input.replace(/\s/g, '').toUpperCase();
const getCountry = (input: string) => input.substring(0, 2);
const isValidString = (input: any): boolean => ibanPattern.test(input);
const moveToBack = (input: string): string =>
  input.substring(4, input.length) + input.substring(0, 4);
const transformLetterToNumber = (input: string): string =>
  (input.charCodeAt(0) - 55).toString();

const parseIBAN = (input: string): string => {
  let result = '';
  for (const item of input) {
    /\d/.test(item)
      ? (result = result + item)
      : (result = result + transformLetterToNumber(item));
  }

  return result;
};

const checkNumber = (input: string): number => {
  let value: string = input;
  while (value.length >= 9) {
    const partial: string = value.substring(0, 9);
    const rest: string = value.substring(9);
    const num: number = +partial % 97;
    value = num.toString() + rest;
  }
  return +value % 97;
};

const isValidIBAN = (input: string): boolean => checkNumber(input) === 1;

const validateIBAN = (value: any): boolean => {
  let valid = false;

  if (isString(value) && isValidString && value) {
    const fixedValue: string = setupString(value);
    const country: string = getCountry(fixedValue);

    if (
      fixedValue.length === getLengthCountry(country) &&
      getLengthCountry(country) !== 0
    ) {
      const transformedIBAN: string = moveToBack(fixedValue);
      const onlyNumbersIban: string = parseIBAN(transformedIBAN);
      valid = isValidIBAN(onlyNumbersIban);
    }
  }

  return valid;
};

export const validator: FieldValidationFunctionSync = fieldValidatorArgs => {
  const { value, message = defaultMessage, customArgs } = fieldValidatorArgs;

  const succeeded = isDefined(value) && validateIBAN(value);

  return {
    succeeded,
    message: succeeded
      ? ''
      : parseMessageWithCustomArgs(
          (message as string) || defaultMessage,
          customArgs
        ),
    type: VALIDATOR_TYPE,
  };
};
