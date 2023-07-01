import { Rule } from 'eslint';
import {ErrorMessage} from "../messages/errors";
import {TSESTree} from "@typescript-eslint/types";

const noInlineStyle: Rule.RuleModule = {
  meta: {
    docs: {
      description: 'Do not use the style element in your html code.',
      recommended: true,
      url: 'https://github.com/pivaszbs/template-typescript-eslint-plugin/blob/master/docs/rules/example-rule.md',
    },
    type: 'suggestion',
  },

  create(context) {
    return {
      JSXIdentifier(node) {
        const attributeNode = node as TSESTree.JSXIdentifier;

        if(attributeNode.name === "style") {
          return context.report({
            node,
            message: ErrorMessage.NO_INLINE_STYLE
          })
        }
      }
    };
  },
};

export default noInlineStyle;
