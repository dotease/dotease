import { Rule } from 'eslint';
import { ErrorMessage } from '../messages/errors';

const obsoleteHtmlTagMap = {
  acronym: 'abbr',
  applet: 'object',
  basefont: 'css: font-family: serif;',
  big: 'css: font-size: larger;',
  center: 'css: text-align: center;',
  dir: 'css: display: block;',
  font: 'css: font-family: serif;',
  frame: 'iframe',
  frameset: 'iframe',
  noframes: 'iframe',
  strike: 'css: text-decoration: line-through;',
  tt: 'css: font-family: monospace;',
};

const noObsoleteTags: Rule.RuleModule = {
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
      JSXOpeningElement(node) {
        const { name } = node.name;

        if (name && name in obsoleteHtmlTagMap) {
          const replacement = obsoleteHtmlTagMap[name];
          context.report({
            node,
            message: ErrorMessage.NO_OBSOLETE_TAGS(name, replacement, replacement.startsWith('css: ')),
          });
        }
      },
    };
  },
};

export default noObsoleteTags;
