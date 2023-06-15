import { Rule } from 'eslint';
import { ARIARole } from '../index';
import { replaceableRolesMap } from '../utils/utils';
import { TSESTree } from '@typescript-eslint/types';

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
      JSXAttribute(node) {
        const attributeNode = node as TSESTree.JSXAttribute;
        const attributeName = attributeNode.name.name;

        if (['role', 'id'].includes(attributeName as string)) {
          const attributeValue = attributeNode.value as TSESTree.Literal;
          const value = attributeValue.value as ARIARole;
          for (const [role, replacement] of replaceableRolesMap) {
            if (value === role) {
              context.report({
                node,
                message: `Use <${replacement}> instead of <div ${attributeName}="${role}">`,
              });
            }
          }
        }
      },
      // JSXOpeningElement(node) {
      //   const nodeName = node.name.name;
      //   const attributes = node.attributes;
      //
      //   for (const attribute of attributes) {
      //     const name = attribute.name.name;
      //
      //     if (name === 'role') {
      //       const value = attribute.value.value as ARIARole;
      //
      //       for (const [role, replacement] of replaceableRolesMap) {
      //         if (value === role) {
      //           context.report({
      //             node,
      //             message: `Use <${replacement}> instead of <${nodeName} role="${role}">`,
      //           });
      //         }
      //       }
      //     }
      //   }
      // },
    };
  },
};

export default promoteSemanticElementsForAccessibility;
