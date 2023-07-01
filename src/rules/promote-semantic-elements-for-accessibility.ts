import { Rule } from 'eslint';
import { ARIARole } from '../index';
import {hasLiteralValue, replaceableRolesMap} from '../utils/utils';
import { TSESTree } from '@typescript-eslint/types';
import { ErrorMessage } from '../messages/errors';

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
        const nodeType = attributeNode.parent as TSESTree.JSXOpeningElement;
        const nodeName = (nodeType.name as TSESTree.JSXIdentifier).name;

        if (['role', 'id'].includes(attributeName as string)) {
          if (hasLiteralValue(attributeNode)) {
            const attributeValue = attributeNode.value?.type === "Literal" ? attributeNode.value as TSESTree.Literal : attributeNode.value?.expression as TSESTree.Literal
            const value = attributeValue.value as ARIARole;
            for (const [role, replacement] of replaceableRolesMap) {
              if (value === role) {
                context.report({
                  node,
                  message: ErrorMessage.PROMOTE_SEMANTIC_ELEMENTS_FOR_ACCESSIBILITY(
                      replacement,
                      nodeName,
                      attributeName as string,
                      role,
                  ),
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
