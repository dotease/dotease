import { RuleTester } from 'eslint';
import { ErrorMessage } from '../../src/messages/errors';
import requireButtonType from '../../src/rules/require-button-type';

const tester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    jsx: true,
  },
});

tester.run('require-button-type', requireButtonType, {
  valid: [
    {
      filename: 'valid.tsx', // filename must be set to tell parser this code is tsx
      code: `() => <button type="button"></button>`,
    },
    {
      filename: 'valid_2.tsx', // filename must be set to tell parser this code is tsx
      code: `() => <button type="submit"></button>`,
    },
  ],
  invalid: [
    {
      filename: 'invalid_no_type.tsx',
      code: `() => <button></button>`,
      errors: [{ message: ErrorMessage.REQUIRE_BUTTON_TYPE }],
    },
    {
      filename: 'invalid_no_type.tsx',
      code: `() => <button type=""></button>`,
      errors: [{ message: ErrorMessage.REQUIRE_BUTTON_TYPE }],
    },
    {
      filename: 'invalid_no_type.tsx',
      code: `() => <button type={""}></button>`,
      errors: [{ message: ErrorMessage.REQUIRE_BUTTON_TYPE }],
    },
  ],
});
