import {Rule} from 'eslint';
import {AST_NODE_TYPES, TSESTree} from "@typescript-eslint/types";
import {ErrorMessage} from "../messages/errors";

const noDuplicateAttribute: Rule.RuleModule = {
  meta: {
    docs: {
      description: 'Do not use more than once the same attribute.',
      recommended: true,
      url: 'https://github.com/pivaszbs/template-typescript-eslint-plugin/blob/master/docs/rules/example-rule.md',
    },
    type: 'suggestion',
  },

  create(context) {
    return {
      JSXOpeningElement(node) {
        const identifierNode = node as TSESTree.JSXOpeningElement;
        const attributes = identifierNode.attributes as (TSESTree.JSXAttribute | TSESTree.JSXSpreadAttribute)[];
        const duplicateMap: Map<string, number> = new Map()
        attributes.forEach((attribute) => {
          if (attribute.type === AST_NODE_TYPES.JSXAttribute) {
            const attributeName = attribute.name.name as string;
            const attributeNumberOfDuplicate: number | undefined = duplicateMap.get(attributeName);
            duplicateMap.set(attributeName, attributeNumberOfDuplicate ? attributeNumberOfDuplicate + 1 : 1)
          }
        })
        const result = Array.from(duplicateMap).filter(value => value[1] > 1)
        if (result.length !== 0) {
          return context.report({
            node,
            message: ErrorMessage.NO_DUPLICATE_ATTRIBUTE(result)
          })
        }
      }
    };
  },
};

export default noDuplicateAttribute;