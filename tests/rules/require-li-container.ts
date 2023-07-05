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
      filename: 'valid.tsx', // filename must be set to tell parser this code is tsx
      code: `(props: props) => <>
                <ul>
                    <li>1</li>
                    <li>2</li>
                </ul>
            </>`,
    },
    {
      filename: 'valid2.tsx', // filename must be set to tell parser this code is tsx
      code: `(props: props) => <>
                <ol>
                    <li>1</li>
                    <li>2</li>
                </ol>
            </>`,
    },
    {
      filename: 'valid3.tsx', // filename must be set to tell parser this code is tsx
      code: `(props: props) => <>
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
      code: `(props: props) => <li>hello</li>`,
      errors: [{ message: ErrorMessage.REQUIRE_LI_CONTAINER }],
    },
    {
      filename: 'invalid_inside_div.tsx',
      code: `(props: props) => <div><li>hello</li></div>`,
      errors: [{ message: ErrorMessage.REQUIRE_LI_CONTAINER }],
    },
    {
      filename: 'invalid_empty_alt_2.tsx',
      code: `(props: props) => <menu><div><li>test</li></div></menu>`,
      errors: [{ message: ErrorMessage.REQUIRE_LI_CONTAINER }],
    },
  ],
});
