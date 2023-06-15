import { Rule } from 'eslint';
import { ARIARole, HtmlNode } from '../index';

const promoteSemanticElementsForAccessibility: Rule.RuleModule = {
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
      JSXOpeningElement(node) {
        const nodeName = node.name.name;
        const attributes = node.attributes;

        for (const attribute of attributes) {
          const name = attribute.name.name;

          if (name === 'role') {
            const value = attribute.value.value as ARIARole;

            const replaceableRolesMap = new Map<ARIARole, HtmlNode>([
              ['banner', 'header'],
              ['navigation', 'nav'],
              ['main', 'main'],
              ['contentinfo', 'footer'],
              ['complementary', 'aside'],
              ['form', 'form'],
              ['search', 'form'],
              ['textbox', 'input'],
              ['checkbox', 'input'],
              ['combobox', 'select'],
              ['listbox', 'select'],
              ['menu', 'ul'],
              ['button', 'button'],
              ['link', 'a'],
              ['listitem', 'li'],
              ['list', 'ul'],
              ['cell', 'td'],
              ['row', 'tr'],
              ['table', 'table'],
              ['rowgroup', 'tbody'],
              ['columnheader', 'th'],
              ['rowheader', 'th'],
              ['grid', 'table'],
              ['article', 'article'],
              ['dialog', 'dialog'],
              ['document', 'article'],
              ['feed', 'article'],
              ['figure', 'figure'],
              ['img', 'img'],
              ['log', 'pre'],
            ]);

            for (const [role, replacement] of replaceableRolesMap) {
              if (value === role) {
                context.report({
                  node,
                  message: `Use <${replacement}> instead of <${nodeName} role="${role}">`,
                });
              }
            }
          }
        }
      },
    };
  },
};

export default promoteSemanticElementsForAccessibility;
