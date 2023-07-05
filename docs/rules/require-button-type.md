# @dotease/require-button-type

> A rule to enforce the presence of a `type` attribute on `<button>` elements in JSX.

- ⭐️ This rule is included in `plugin:eslint/recommended` preset.

This rule ensures that `<button>` elements in JSX have a `type` attribute specified. The `type` attribute is required for accessibility and to define the behavior of the button. Missing or empty `type` attributes are reported as linting errors.

## Rule Details

This rule enforces the presence of a `type` attribute on `<button>` elements in JSX.

Examples of **incorrect** code:

```jsx
/* eslint eslint/template/require-button-type: error */

() => <button></button>
```
- Expected error message: `A 'type' attribute is required for <button> elements.`

```jsx
/* eslint eslint/template/require-button-type: error */

() => <button type=""></button>
```
- Expected error message: `A 'type' attribute is required for <button> elements.`

Examples of **correct** code:

```jsx
/* eslint eslint/template/require-button-type: error */

() => <button type="button"></button>
```

```jsx
/* eslint eslint/template/require-button-type: error */

() => <button type="submit"></button>
```

## Options

This rule does not have any configuration options.

## Implementation

- [Rule source](../../src/rules/require-button-type.ts)
- [Test source](../../tests/rules/require-button-type.ts)

## Test Cases

This rule has been tested using the following test cases:

### Valid Cases

- Filename: `valid.tsx`
  ```jsx
  () => <button type="button"></button>
  ```

- Filename: `valid_2.tsx`
  ```jsx
  () => <button type="submit"></button>
  ```

### Invalid Cases

- Filename: `invalid_no_type.tsx`
  ```jsx
  () => <button></button>
  ```
    - Expected error message: `A 'type' attribute is required for <button> elements.`

- Filename: `invalid_no_type.tsx`
  ```jsx
  () => <button type=""></button>
  ```
    - Expected error message: `A 'type' attribute is required for <button> elements.`