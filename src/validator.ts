import { FieldValidationFunctionSync } from '@lemoncode/fonk';
import {
  sanitizeValue,
  hasIbanPattern,
  hasValidLength,
  isValidIBAN,
} from './validator.business';

const VALIDATOR_TYPE = 'IBAN';

let defaultMessage = 'Invalid IBAN';

export const setErrorMessage = message => (defaultMessage = message);

const isDefined = value => value !== void 0 && value !== null && value !== '';

const validate = (value): boolean => {
  const sanitizedValue = sanitizeValue(value);

  return (
    hasIbanPattern(sanitizedValue) &&
    hasValidLength(sanitizedValue) &&
    isValidIBAN(sanitizedValue)
  );
};

const validateType = (value: string) => typeof value === 'string';

export const validator: FieldValidationFunctionSync = fieldValidatorArgs => {
  const { value, message = defaultMessage } = fieldValidatorArgs;

  const succeeded =
    !isDefined(value) || (validateType(value) && validate(value));

  return {
    succeeded,
    message: succeeded ? '' : (message as string),
    type: VALIDATOR_TYPE,
  };
};
