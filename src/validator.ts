import { FieldValidationFunctionSync } from '@lemoncode/fonk';
import { CustomValidatorArgs } from './validator.model';
import { isDefined, buildCustomMessage } from './validator.business';

// TODO: Add validator type
const VALIDATOR_TYPE = '';

// TODO: Add default message
let defaultMessage = '';
export const setErrorMessage = message => (defaultMessage = message);

export const validator: FieldValidationFunctionSync<
  CustomValidatorArgs
> = fieldValidatorArgs => {
  const { value, message = defaultMessage } = fieldValidatorArgs;

  // TODO: Add validator
  const succeeded = !isDefined(value) || ...;

  return {
    succeeded,
    message: succeeded
      ? ''
      : buildCustomMessage((message as string) || defaultMessage, args),
    type: VALIDATOR_TYPE,
  };
};
