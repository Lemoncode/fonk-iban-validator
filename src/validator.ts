import {
  FieldValidationFunctionSync,
  parseMessageWithCustomArgs,
} from '@lemoncode/fonk';

// TODO: Add validator type
const VALIDATOR_TYPE = '';

// TODO: Add default message
let defaultMessage = '';
export const setErrorMessage = message => (defaultMessage = message);

const isDefined = value => value !== void 0 && value !== null && value !== '';

export const validator: FieldValidationFunctionSync = fieldValidatorArgs => {
  const { value, message = defaultMessage, customArgs } = fieldValidatorArgs;

  // TODO: Add validator
  const succeeded = !isDefined(value) || ...;

  return {
    succeeded,
    message: succeeded
      ? ''
      : // TODO: Use if it has custom args
        parseMessageWithCustomArgs(
          (message as string) || defaultMessage,
          customArgs
        ),
    type: VALIDATOR_TYPE,
  };
};
