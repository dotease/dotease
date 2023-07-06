import { RuleTester } from 'eslint';
import noDuplicateId from '../../src/rules/no-duplicate-id';

const tester = new RuleTester({
    parser: require.resolve('@typescript-eslint/parser'),
    parserOptions: {
        jsx: true,
    },
});

tester.run('no-duplicate-id', noDuplicateId, {
    valid: [
        {
            filename: 'valid.tsx', // filename must be set to tell parser this code is tsx
            code: `(props: props) => <div id="my_id"></div>`,
        },
        {
            filename: 'valid_2.tsx', // filename must be set to tell parser this code is tsx
            code: `(props: props) => 
                <div id="my_id">
                    <div id="my_second_id"></div>
                </div>`,
        },
        {
            filename: 'valid_3.tsx', // filename must be set to tell parser this code is tsx
            code: `(props: props) => 
                <div class="my_class">
                </div>`,
        },
    ],
    invalid: [
        {
            filename: 'invalid_no_duplicate.tsx',
            code: `(props: props) => 
                <div id="my_id">
                    <div id="my_id"></div>
                </div>`,
            errors: [
                'Do not duplicate "id" attributes in your code. Duplicates found:\n- my_id\n'
            ],
        },
        {
            filename: 'invalid_no_duplicate_2.tsx',
            code: `(props: props) => 
                <div id="my_id" id="my_id">
                    <div id="my_id" class="my_class"></div>
                </div>`,
            errors: [
                'Do not duplicate "id" attributes in your code. Duplicates found:\n- my_id\n'
            ],
        },
        {
            filename: 'invalid_no_duplicate_3.tsx',
            code: `(props: props) => 
                <div id="my_id" id="my_id">
                    <div class="my_class"></div>
                </div>`,
            errors: [
                'Do not duplicate "id" attributes in your code. Duplicates found:\n- my_id\n'
            ],
        },
        {
            filename: 'invalid_no_duplicate_4.tsx',
            code: `(props: props) => 
                <div id="my_id">
                    <div id="my_id">
                        <div id="my_id">
                        </div>
                    </div>
                </div>`,
            errors: [
                'Do not duplicate "id" attributes in your code. Duplicates found:\n- my_id\n'
            ],
        },
        {
            filename: 'invalid_no_duplicate_5.tsx',
            code: `(props: props) => 
                <div id="my_id">
                    <div>
                        <div id="my_id">
                        </div>
                    </div>
                </div>`,
            errors: [
                'Do not duplicate "id" attributes in your code. Duplicates found:\n- my_id\n'
            ],
        },
        {
            filename: 'invalid_no_duplicate_6.tsx',
            code: `(props: props) => 
                <div id="my_id">
                    <div id="my_second_id">
                        <div id="my_id">
                            <div id="my_second_id">
                            </div>
                        </div>
                    </div>
                </div>`,
            errors: [
                'Do not duplicate "id" attributes in your code. Duplicates found:\n- my_id\n- my_second_id\n'
            ],
        },
        {
            filename: 'invalid_no_duplicate_7.tsx',
            code: `(props: props) => 
                <div id="my_id" id="my_second_id">
                    <div id="my_second_id" id="my_id"></div>
                </div>`,
            errors: [
                'Do not duplicate "id" attributes in your code. Duplicates found:\n- my_id\n- my_second_id\n'
            ],
        },
    ],
});
