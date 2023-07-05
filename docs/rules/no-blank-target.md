# dotease/no-blank-target

> This rule disallows the use of `target="_blank"` in anchor (`<a>`) tags.


This rule prevents the use of `target="_blank"` in anchor tags. Opening links in a new tab without user consent can be disruptive to user experience and may lead to security risks, such as phishing attacks. It is recommended to use appropriate alternative methods to indicate external links, such as adding an icon or text next to the link.

## Rule Details

This rule raises an error when anchor tags (`<a>`) have the `target="_blank"` attribute.

Examples of **incorrect** code:

```tsx
/*eslint eslint/no-blank-target: error */

(props: Props) => <a target="_blank"></a>;
```

```tsx
/*eslint eslint/no-blank-target: error */

(props: Props) => <a href="https://example.com" target="_blank"></a>;
```

Examples of **correct** code:

```tsx
/*eslint eslint/no-blank-target: error */

(props: Props) => <a target="_self"></a>;
```

```tsx
/*eslint eslint/no-blank-target: error */

(props: Props) => <a href="https://example.com" target="_top"></a>;
```

## Options

This rule does not have any configuration options.

## Implementation

- [Rule source](../../src/rules/no-blank-target.ts)
- [Test source](../../tests/rules/no-blank-target.ts)

### Example Test Cases

```tsx
import { RuleTester } from 'eslint';
import noBlankTarget from '../../src/rules/no-blank-target';
import { ErrorMessage } from '../../src/messages/errors';

const tester = new RuleTester({
    parser: require.resolve('@typescript-eslint/parser'),
    parserOptions: {
        jsx: true,
    },
});

tester.run('require-img-alt', noBlankTarget, {
    valid: [
        {
            filename: 'valid.tsx',
            code: `(props: Props) => <a target="_self"></a>`,
        },
        {
            filename: 'valid_2.tsx',
            code: `(props: Props) => <a href="https://youtu.be/3YxaaGgTQYM?t=63" target="_top"></a>`,
        },
    ],
    invalid: [
        {
            filename: 'invalid_no_alt.tsx',
            code: `(props: Props) => <a target="_blank"></a>`,
            errors: [{ message: ErrorMessage.NO_BLANK_TARGET }],
        },
        {
            filename: 'invalid_no_alt.tsx',
            code: `(props: Props) => <a href="https://youtu.be/3YxaaGgTQYM?t=63" target="_blank"></a>`,
            errors: [{ message: ErrorMessage.NO_BLANK_TARGET }],
        },
    ],
});
```

Note: Make sure to adjust the import paths and filenames in the test cases according to your project structure.