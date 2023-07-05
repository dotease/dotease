# @dotease/no-obsolete-tags

> A rule to disallow the use of obsolete HTML tags in JSX elements.

- ⭐️ This rule is included in `plugin:eslint/recommended` preset.

This rule ensures that JSX elements do not contain obsolete HTML tags. It checks if the tag name used in JSX corresponds to an obsolete HTML tag and reports a linting error if it does.

## Rule Details

This rule disallows the use of obsolete HTML tags in JSX elements. It uses a predefined map of obsolete HTML tags to check if the tag name is obsolete.

Examples of **incorrect** code:

```tsx
/* eslint eslint/template/no-obsolete-tags: error */

(props: props) => <acronym></acronym>
```
- Expected error message: `Do not use obsolete HTML tag 'acronym'.`

```tsx
/* eslint eslint/template/no-obsolete-tags: error */

(props: props) => <basefont></basefont>
```
- Expected error message: `Do not use obsolete HTML tag 'basefont'.`

```tsx
/* eslint eslint/template/no-obsolete-tags: error */

(props: props) => <strike></strike>
```
- Expected error message: `Do not use obsolete HTML tag 'strike'.`

Examples of **correct** code:

```tsx
/* eslint eslint/template/no-obsolete-tags: error */

(props: props) => <abbr></abbr>
```

```tsx
/* eslint eslint/template/no-obsolete-tags: error */

(props: props) => <iframe></iframe>
```

## Options

This rule does not have any configuration options.

## Implementation

- [Rule source](../../src/rules/no-obsolete-tags.ts)
- [Test source](../../tests/rules/no-obsolete-tags.ts)

## Test Cases

This rule has been tested using the following test cases:

### Valid Cases

- Filename: `valid.tsx`
  ```tsx
  (props: props) => <abbr></abbr>
  ```

- Filename: `valid.tsx`
  ```tsx
  (props: props) => <object></object>
  ```

- Filename: `valid.tsx`
  ```tsx
  (props: props) => <iframe></iframe>
  ```

### Invalid Cases

- Filename: `invalid.tsx`
  ```tsx
  (props: props) => <acronym></acronym>
  ```
    - Expected error message: `Do not use obsolete HTML tag 'acronym'.`

- Filename: `invalid.tsx`
  ```tsx
  (props: props) => <basefont></basefont>
  ```
    - Expected error message: `Do not use obsolete HTML tag 'basefont'.`

- Filename: `invalid.tsx`
  ```tsx
  (props: props) => <strike></strike>
  ```
    - Expected error message: `Do not use obsolete HTML tag 'strike'.`

- Other invalid test cases follow the same pattern for different obsolete HTML tags.