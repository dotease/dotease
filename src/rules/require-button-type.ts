import { Rule } from 'eslint';
import { TSESTree } from '@typescript-eslint/types';
import { ErrorMessage } from '../messages/errors';

const requireButtonType: Rule.RuleModule = {
  meta: {
    docs: {
      description: 'An example rule.',
      recommended: true,
      url: 'https://github.com/pivaszbs/template-typescript-eslint-plugin/blob/master/docs/rules/example-rule.md',
    },
    messages: {
      disallowExample: "'example' identifier is forbidden.",
    },
    type: 'suggestion',
  },

  create(context) {
    return {
      'JSXIdentifier[name="button"]'(node) {
        const parent = node.parent as TSESTree.JSXOpeningElement;
        const attributes = parent.attributes as TSESTree.JSXAttribute[];

        if (attributes) {
          const typeAttribute = attributes.find((attr) => attr.type === 'JSXAttribute' && attr.name.name === 'type');

          const value =
            typeAttribute?.value?.type === 'JSXExpressionContainer'
              ? ((typeAttribute.value.expression as TSESTree.Literal).value as string)
              : ((typeAttribute?.value as TSESTree.Literal)?.value as string);

          if (!value || (value !== 'button' && value !== 'submit')) {
            context.report({
              node,
              message: ErrorMessage.REQUIRE_BUTTON_TYPE,
            });
          }
        }
      },
    };
  },
};

export default requireButtonType;
