# dotease/promote-semantic-elements-for-accessibility

> This rule promotes the use of semantic elements for improved accessibility.

- ⭐️ This rule is included in `plugin:eslint/recommended` preset.

This rule encourages the use of semantic elements, such as `<header>`, `<nav>`, `<main>`, `<footer>`, and `<aside>`, instead of generic `<div>` elements with specific ARIA roles. Semantic elements provide better structure and semantics, which improves accessibility and helps assistive technologies understand the content.

## Rule Details

This rule raises an error when generic `<div>` elements are used with specific ARIA roles that have corresponding semantic elements.

Examples of **incorrect** code:

```tsx
/*eslint eslint/promote-semantic-elements-for-accessibility: error */

(props: Props) => <div role="banner"></div>;
```

```tsx
/*eslint eslint/promote-semantic-elements-for-accessibility: error */

(props: Props) => <div role="navigation"></div>;
```

```tsx
/*eslint eslint/promote-semantic-elements-for-accessibility: error */

(props: Props) => <div id="navigation"></div>;
```

Examples of **correct** code:

```tsx
/*eslint eslint/promote-semantic-elements-for-accessibility: error */

(props: Props) => <header></header>;
```

```tsx
/*eslint eslint/promote-semantic-elements-for-accessibility: error */

(props: Props) => <nav></nav>;
```

```tsx
/*eslint eslint/promote-semantic-elements-for-accessibility: error */

(props: Props) => <main></main>;
```

## Options

This rule does not have any configuration options.

## Implementation

- [Rule source](../../src/rules/promote-semantic-elements-for-accessibility.ts)
- [Test source](../../tests/rules/promote-semantic-elements-for-accessibility.ts)

### Example Test Cases

```tsx
import { RuleTester } from 'eslint';
import promoteSemanticElementsForAccessibility from '../../src/rules/promote-semantic-elements-for-accessibility';

const tester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    jsx: true,
  },
});

tester.run('promote-semantic-elements-for-accessibility', promoteSemanticElementsForAccessibility, {
  valid: [
    {
      filename: 'valid_header.tsx',
      code: `(props: Props) => <header></header>`,
    },
    {
      filename: 'valid_nav.tsx',
      code: `(props: Props) => <nav></nav>`,
    },
    {
      filename: 'valid_main.tsx',
      code: `(props: Props) => <main></main>`,
    },
    {
      filename: 'valid_footer.tsx',
      code: `(props: Props) => <footer></footer>`,
    },
    {
      filename: 'valid_aside.tsx',
      code: `(props: Props) => <aside></aside>`,
    },
  ],
  invalid: [
    {
      filename: 'invalid_div_banner.tsx',
      code: `(props: Props) => <div role="banner"></div>`,
      errors: ['Use <header> instead of <div role="banner">'],
    },
    {
      filename: 'invalid_div_navigation.tsx',
      code: `(props: Props) => <div role="navigation"></div>`,
      errors: ['Use <nav> instead of <div role="navigation">'],
    },
    {
      filename: 'invalid_div_id_navigation.tsx',
      code: `(props: Props) => <div id="navigation"></div>`,
      errors: ['Use <nav> instead of <div id="navigation">'],
    },
   