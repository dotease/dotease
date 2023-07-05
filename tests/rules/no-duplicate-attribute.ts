import { RuleTester } from 'eslint';
import noDuplicateAttribute from "../../src/rules/no-duplicate-attribute";

const tester = new RuleTester({
    parser: require.resolve('@typescript-eslint/parser'),
    parserOptions: {
        jsx: true,
    },
});

tester.run('require-img-alt', noDuplicateAttribute, {
    valid: [
        {
            filename: 'valid.tsx', // filename must be set to tell parser this code is tsx
            code: `(props: props) => <a id="my_link" class="super-link"></a>`,
        },
        {
            filename: 'valid_2.tsx', // filename must be set to tell parser this code is tsx
            code: `(props: props) => <div id="imageBackground"></div>`,
        },
    ],
    invalid: [
        {
            filename: 'invalid_no_duplicate.tsx',
            code: `(props: props) => <div class="my_link" class="super-link"></div>`,
            errors: ['Your elements cannot have duplicate attributes. Duplicates found:\n- class: 2 times\n'],
        },
        {
            filename: 'invalid_no_duplicate_2.tsx',
            code: `(props: props) => 
                <div 
                    style="color: darkgreen" style="display: flex" style="text-align: center"
                 ></div>`,
            errors: ['Your elements cannot have duplicate attributes. Duplicates found:\n- style: 3 times\n'],
        },
        {
            filename: 'invalid_no_duplicate_3.tsx',
            code: `(props: props) => 
                 <div 
                    style="color: darkgreen" style="display: flex" style="text-align: center"
                    class="my_link" class="super-link"
                 ></div>`,
            errors: ['Your elements cannot have duplicate attributes. Duplicates found:\n- style: 3 times\n- class: 2 times\n'],
        },
    ],
});