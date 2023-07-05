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
