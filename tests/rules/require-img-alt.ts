import {RuleTester} from "eslint";
import requireImgAlt from "../../src/rules/require-img-alt";
import {ErrorMessage} from "../../src/messages/errors";

const tester = new RuleTester({
    parser: require.resolve("@typescript-eslint/parser"),
    parserOptions: {
        jsx: true,
    },
});

tester.run("require-img-alt", requireImgAlt, {
    valid: [
        {
            filename: "valid.tsx", // filename must be set to tell parser this code is tsx
            code: `(props: props) => <img src="source" alt="this is an alt" />`,
        },
        {
            filename: "valid_2.tsx", // filename must be set to tell parser this code is tsx
            code: `(props: props) => <img src="source" alt="my best picture yet" />`,
        },
    ],
    invalid: [
        {
            filename: "invalid_no_alt.tsx",
            code: `(props: props) => <img src="" />`,
            errors: [{ message: ErrorMessage.REQUIRE_IMG_ALT }],
        },
        {
            filename: "invalid_empty_alt.tsx",
            code: `(props: props) => <img src="" alt="" />`,
            errors: [{ message: ErrorMessage.REQUIRE_IMG_ALT_EMPTY }],
        },
        {
            filename: "invalid_empty_alt_2.tsx",
            code: `(props: props) => <img src="" alt="     " />`,
            errors: [{ message: ErrorMessage.REQUIRE_IMG_ALT_EMPTY }],
        },
    ],
});