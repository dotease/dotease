Here's an example markdown file for an ESLint rule called `no-duplicate-attribute` based on the tests provided:

# [ESLint](https://www.google.com/search?q=ESLint) rule called `no-duplicate-attribute`

> A rule that disallows HTML elements to have duplicate attributes.

- ⭐️ This rule is included in `plugin:xxxx/recommended` preset.

This rule aims at disallowing HTML elements to have duplicate attributes.

## Rule Details

This rule checks for duplicate attributes in HTML elements and reports them as errors.

Examples of **incorrect** code:

```tsx
/*eslint no-duplicate-attribute: error */

(props: props) => <div class="my_link" class="super-link"></div>
```

```tsx
/*eslint no-duplicate-attribute: error */

(props: props) => 
   <div 
      style="color: darkgreen" style="display: flex" style="text-align: center"
   ></div>
```

```tsx
/*eslint no-duplicate-attribute: error */

(props: props) => 
   <div 
      style="color: darkgreen" style="display: flex" style="text-align: center"
      class="my_link" class="super-link"
   ></div>
```

Examples of **correct** code:

```tsx
/*eslint no-duplicate-attribute: error */

(props: props) => <a id="my_link" class="super-link"></a>
```

```tsx
/*eslint no-duplicate-attribute: error */

(props: props) => <div id="imageBackground"></div>
```

## Options

Nothing.

## Implementation

- [Rule source](../../src/rules/no-duplicate-attribute.ts)
- [Test source](../../tests/rules/no-duplicate-attribute.ts)

## Further Reading

- [HTML Standard](https://www.google.com/search?q=HTML%20Standard) - Attributes
