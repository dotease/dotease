# dotease/require-img-alt

> This rule enforces the presence of `alt` attribute in `<img>` tags in JSX.

- ⭐️ This rule is included in `plugin:eslint/recommended` preset.

This rule ensures that all `<img>` tags in JSX have a valid `alt` attribute. The `alt` attribute provides alternative text for screen readers and improves accessibility.

## Rule Details

This rule raises an error when an `<img>` tag in JSX is missing the `alt` attribute or when the `alt` attribute is empty.

Examples of **incorrect** code:

```tsx
/*eslint eslint/require-img-alt: error */

(props: Props) => <img src="" />;
```

```tsx
/*eslint eslint/require-img-alt: error */

(props: Props) => <img src="" alt="" />;
```

```tsx
/*eslint eslint/require-img-alt: error */

(props: Props) => <img src="" alt="     " />;
```

Examples of **correct** code:

```tsx
/*eslint eslint/require-img-alt: error */

(props: Props) => <img src="source" alt="this is an alt" />;
```

```tsx
/*eslint eslint/require-img-alt: error */

(props: Props) => <img src="source" alt="my best picture yet" />;
```

## Options

This rule does not have any configuration options.

## Implementation

- [Rule source](../../src/rules/require-img-alt.ts)
- [Test source](../../tests/rules/require-img-alt.ts)

### Example Test Cases

```tsx
import { RuleTester } from 'eslint';
import requireImgAlt from '../../src/rules/require-img-alt';
import { ErrorMessage } from '../../src/messages/errors';

const tester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    jsx: true,
  },
});

tester.run('require-img-alt', requireImgAlt, {
  valid: [
    {
      filename: 'valid.tsx',
      code: `(props: Props) => <img src="source" alt="this is an alt" />`,
    },
    {
      filename: 'valid_2.tsx',
      code: `(props: Props) => <img src="source" alt="my best picture yet" />`,
    },
  ],
  invalid: [
    {
      filename: 'invalid_no_alt.tsx',
      code: `(props: Props) => <img src="" />`,
      errors: [{ message: ErrorMessage.REQUIRE_IMG_ALT }],
    },
    {
      filename: 'invalid_empty_alt.tsx',
      code: `(props: Props) => <img src="" alt="" />`,
      errors: [{ message: ErrorMessage.REQUIRE_IMG_ALT_EMPTY }],
    },
    {
      filename: 'invalid_empty_alt_2.tsx',
      code: `(props: Props) => <img src="" alt="     " />`,
      errors: [{ message: ErrorMessage.REQUIRE_IMG_ALT_EMPTY }],
    },
  ],
});
```
