import { Rule } from 'eslint';
import { ErrorMessage } from '../messages/errors';

const requireImgAlt: Rule.RuleModule = {
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
      "JSXIdentifier[name='img']"(node) {
        const parent = node.parent;

        if (parent.attributes) {
          const attributes: string[] = parent.attributes.map((attr) => attr.name.name);
          const altValue: string[] | undefined = parent.attributes
            .filter((attr) => attr.name.name === 'alt')
            .map((attr) => attr.value.value);

          if (!attributes.includes('alt')) {
            context.report({
              message: ErrorMessage.REQUIRE_IMG_ALT,
              node,
            });
          } else if (altValue && altValue[0].trim() === '') {
            context.report({
              message: ErrorMessage.REQUIRE_IMG_ALT_EMPTY,
              node,
            });
          }
        }
      },
    };
  },
};

export default requireImgAlt;
