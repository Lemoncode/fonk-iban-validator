import { CustomValidatorArgs } from './validator.model';

// TODO: Delete method if not necessary CustomArgs
export const buildCustomMessage = (
  message: string,
  args: CustomValidatorArgs
) =>
  message &&
  Object.keys(args).reduce(
    (accum, current) =>
      accum.replace(new RegExp(`{{${current}}}`, 'gi'), args[current]),
    message
  );

export const isDefined = value =>
  value !== void 0 && value !== null && value !== '';
