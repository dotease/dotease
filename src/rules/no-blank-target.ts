import { Rule } from 'eslint';
import {TSESTree} from "@typescript-eslint/types";
import {Literal} from "estree";
import {ErrorMessage} from "../messages/errors";

const noBlankTarget: Rule.RuleModule = {
  meta: {
    docs: {
      description: 'You are not supposed to use target="blank".',
      recommended: true,
      url: 'https://github.com/pivaszbs/template-typescript-eslint-plugin/blob/master/docs/rules/example-rule.md',
    },
    type: 'suggestion',
  },

  create(context) {
    return {
      JSXAttribute(node) {
        const attributeNode = node as TSESTree.JSXAttribute;
        const attributeName = attributeNode.name.name;

        if(attributeName as string === "target") {
          const attributeValue = attributeNode.value as Literal;
          if (attributeValue.value as string === "_blank") {
            return context.report({
              node,
              message: ErrorMessage.NO_BLANK_TARGET
            })
          }
        }
      }
    };
  },
};

export default noBlankTarget;