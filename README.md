# fonk-iban-validator

[![CircleCI](https://badgen.net/github/status/Lemoncode/fonk-iban-validator/master/ci?icon=circleci&label=circleci)](https://circleci.com/gh/Lemoncode/fonk-iban-validator/tree/master)
[![NPM Version](https://badgen.net/npm/v/@lemoncode/fonk-iban-validator?icon=npm&label=npm)](https://www.npmjs.com/package/@lemoncode/fonk-iban-validator)
[![bundle-size](https://badgen.net/bundlephobia/min/@lemoncode/fonk-iban-validator)](https://bundlephobia.com/result?p=@lemoncode/fonk-iban-validator)

This is a [fonk](https://github.com/Lemoncode/fonk) microlibrary that brings validation capabilities to:

// TODO: Update description and example.

- Validate if a field of a form ....

How to add it to an existing form validation schema:

We have the following form model:

```
const myFormValues = {
  product: 'shoes',
  price: 20,
}
```

We can add a iban validation to the myFormValues

```javascript
import { iban } from '@lemoncode/fonk-iban-validator';

const validationSchema = {
  field: {
    price: [iban.validator],
  },
};
```

You can customize the error message displayed in two ways:

- Globally, replace the default error message in all validationSchemas (e.g. porting to spanish):

```javascript
import { iban } from '@lemoncode/fonk-iban-validator';

iban.setErrorMessage('El campo debe de ser numérico');
```

- Locally just override the error message for this validationSchema:

```javascript
import { iban } from '@lemoncode/fonk-iban-validator';

const validationSchema = {
  field: {
    price: [
      {
        validator: iban.validator,
        message: 'Error message only updated for the validation schema',
      },
    ],
  },
};
```

Please, refer to [fonk](https://github.com/Lemoncode/fonk) to know more.

## License

[MIT](./LICENSE)

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
