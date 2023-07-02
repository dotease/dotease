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
            filename: 'valid.tsx', // filename must be set to tell parser this code is tsx
            code: `(props: props) => <a target="_self"></a>`,
        },
        {
            filename: 'valid_2.tsx', // filename must be set to tell parser this code is tsx
            code: `(props: props) => <a href="https://youtu.be/3YxaaGgTQYM?t=63" target="_top"></a>`,
        },
    ],
    invalid: [
        {
            filename: 'invalid_no_alt.tsx',
            code: `(props: props) => <a target="_blank"></a>`,
            errors: [{ message: ErrorMessage.NO_BLANK_TARGET }],
        },
        {
            filename: 'invalid_no_alt.tsx',
            code: `(props: props) => <a href="https://youtu.be/3YxaaGgTQYM?t=63" target="_blank"></a>`,
            errors: [{ message: ErrorMessage.NO_BLANK_TARGET }],
        },
    ],
});