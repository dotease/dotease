# dotease/no-inline-style

> This rule disallows the use of inline styles in JSX.

- ⭐️ This rule is included in `plugin:eslint/recommended` preset.

This rule prevents the use of inline styles in JSX. Inline styles can make the code harder to maintain, hinder separation of concerns, and override global styling. It is recommended to use CSS classes or external stylesheets for styling.

## Rule Details

This rule raises an error when inline styles are used in JSX elements.

Examples of **incorrect** code:

```tsx
/*eslint eslint/no-inline-style: error */

(props: Props) => <p style="text-align: center">my text</p>;
```

```tsx
/*eslint eslint/no-inline-style: error */

(props: Props) => <h1 style="color: darkgreen">my text</h1>;
```

```tsx
/*eslint eslint/no-inline-style: error */

(props: Props) => <div style="display: flex" class="my-class"></div>;
```

Examples of **correct** code:

```tsx
/*eslint eslint/no-inline-style: error */

(props: Props) => <p>my text</p>;
```

```tsx
/*eslint eslint/no-inline-style: error */

(props: Props) => <h1>my text</h1>;
```

```tsx
/*eslint eslint/no-inline-style: error */

(props: Props) => <div class="my-class"></div>;
```

## Options

This rule does not have any configuration options.

## Implementation

- [Rule source](../../src/rules/no-inline-style.ts)
- [Test source](../../tests/rules/no-inline-style.ts)

### Example Test Cases

```tsx
import { RuleTester } from 'eslint';
import { ErrorMessage } from '../../src/messages/errors';
import noInlineStyle from "../../src/rules/no-inline-style";

const tester = new RuleTester({
    parser: require.resolve('@typescript-eslint/parser'),
    parserOptions: {
        jsx: true,
    },
});

tester.run('no-inline-style', noInlineStyle, {
    valid: [
        {
            filename: 'valid.tsx',
            code: `(props: props) => <p>my text</p>`
        },
        {
            filename: 'valid.tsx',
            code: `(props: props) => <h1>my text</h1>`
        },
        {
            filename: 'valid.tsx',
            code: `(props: props) => <div class="my-class"></div>`
        }
    ],
    invalid: [
        {
            filename: 'invalid.tsx',
            code: `(props: props) => <p style="text-align: center">my text</p>`,
            errors: [{ message: ErrorMessage.NO_INLINE_STYLE }]
        },
        {
            filename: 'invalid.tsx',
            code: `(props: props) => <h1 style="color: darkgreen">my text</h1>`,
            errors: [{ message: ErrorMessage.NO_INLINE_STYLE }]
        },
        {
            filename: 'valid.tsx',
            code: `(props: props) => <div style="display: flex" class="my-class"></div>`,
            errors: [{ message: ErrorMessage.NO_INLINE_STYLE }]
        }
    ],
});
```

Note: Make sure to adjust the import paths and filenames in the test cases according to your project structure.