import { FieldValidationFunctionSync } from '@lemoncode/fonk';

export namespace iban {
  export const validator: FieldValidationFunctionSync;
  export function setErrorMessage(message: string | string[]): void;
}
