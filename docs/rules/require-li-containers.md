# dotease/require-li-container

> This rule enforces that `<li>` elements are wrapped inside a valid container element.

- ⭐️ This rule is included in `plugin:eslint/recommended` preset.

This rule ensures that all `<li>` elements are enclosed within a valid container element such as `<ul>`, `<ol>`, or `<menu>`. This helps maintain proper structure and semantics in lists.

## Rule Details

This rule raises an error when an `<li>` element is not wrapped inside a valid container element.

Examples of **incorrect** code:

```tsx
/*eslint eslint/require-li-container: error */

(props: Props) => <li>hello</li>;
```

```tsx
/*eslint eslint/require-li-container: error */

(props: Props) => <div><li>hello</li></div>;
```

```tsx
/*eslint eslint/require-li-container: error */

(props: Props) => <menu><div><li>test</li></div></menu>;
```

Examples of **correct** code:

```tsx
/*eslint eslint/require-li-container: error */

(props: Props) => <>
  <ul>
    <li>1</li>
    <li>2</li>
  </ul>
</>;
```

```tsx
/*eslint eslint/require-li-container: error */

(props: Props) => <>
  <ol>
    <li>1</li>
    <li>2</li>
  </ol>
</>;
```

```tsx
/*eslint eslint/require-li-container: error */

(props: Props) => <>
  <menu>
    <li>1</li>
    <li>2</li>
  </menu>
</>;
```

## Options

This rule does not have any configuration options.

## Implementation

- [Rule source](../../src/rules/require-li-container.ts)
- [Test source](../../tests/rules/require-li-container.ts)

### Example Test Cases

```tsx
import { RuleTester } from 'eslint';
import { ErrorMessage } from '../../src/messages/errors';
import requireLiContainer from '../../src/rules/require-li-container';

const tester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    jsx: true,
  },
});

tester.run('require-li-container', requireLiContainer, {
  valid: [
    {
      filename: 'valid.tsx',
      code: `(props: Props) => <>
                <ul>
                    <li>1</li>
                    <li>2</li>
                </ul>
            </>`,
    },
    {
      filename: 'valid2.tsx',
      code: `(props: Props) => <>
                <ol>
                    <li>1</li>
                    <li>2</li>
                </ol>
            </>`,
    },
    {
      filename: 'valid3.tsx',
      code: `(props: Props) => <>
                <menu>
                    <li>1</li>
                    <li>2</li>
                </menu>
            </>`,
    },
  ],
  invalid: [
    {
      filename: 'invalid_base.tsx',
      code: `(props: Props) => <li>hello</li>`,
      errors: [{ message: ErrorMessage.REQUIRE_LI_CONTAINER }],
    },
    {
      filename: 'invalid_inside_div.tsx',
      code: `(props: Props) => <div><li>hello</li></div>`,
      errors: [{ message: ErrorMessage.REQUIRE_LI_CONTAINER }],
    },
    {
      filename: 'invalid_empty_alt_2.tsx',
      code: `(props: Props) => <menu><div><li>test</li></