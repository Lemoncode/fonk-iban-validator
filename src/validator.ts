import { FieldValidationFunctionSync } from '@lemoncode/fonk';

// TODO: Add validator type
const VALIDATOR_TYPE = '';

// TODO: Add default message
let defaultMessage = '';
export const setErrorMessage = message => (defaultMessage = message);

const isDefined = value => value !== void 0 && value !== null && value !== '';

export const validator: FieldValidationFunctionSync = fieldValidatorArgs => {
  const { value, message = defaultMessage } = fieldValidatorArgs;

// TODO: Add validator
  const succeeded = !isDefined(value) || ...;

  return {
    succeeded,
    message: (succeeded ? '' : message) as string,
    type: VALIDATOR_TYPE,
  };
};
