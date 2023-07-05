import { Rule } from 'eslint';
import { TSESTree } from '@typescript-eslint/types';
import { ErrorMessage } from '../messages/errors';

const requireLiContainer: Rule.RuleModule = {
  meta: {
    docs: {
      description: 'An example rule.',
      recommended: true,
      url: 'https://github.com/pivaszbs/template-typescript-eslint-plugin/blob/master/docs/rules/example-rule.md',
    },
    type: 'suggestion',
  },

  create(context) {
    return {
      "JSXElement > JSXOpeningElement > JSXIdentifier[name='li']"(node) {
        const openingElement = node.parent as TSESTree.JSXOpeningElement;
        const element = openingElement.parent as TSESTree.JSXElement;

        if (element.parent?.type !== 'JSXElement') {
          context.report({
            node,
            message: ErrorMessage.REQUIRE_LI_CONTAINER,
          });
          return;
        }

        const parent = element.parent as TSESTree.JSXElement;
        const parentTagName = (parent.openingElement.name as TSESTree.JSXIdentifier).name;

        if (!['ul', 'ol', 'menu'].includes(parentTagName)) {
          context.report({
            node,
            message: ErrorMessage.REQUIRE_LI_CONTAINER,
          });
        }
      },
    };
  },
};

export default requireLiContainer;
