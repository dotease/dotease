import {Rule} from 'eslint';
import {ErrorMessage} from "../messages/errors";

const noDuplicateId: Rule.RuleModule = {
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
      Program(node) {
        const my_regex = new RegExp("(?<=id=\")[^\"]+")

        const idList = context.getSourceCode().getLines()
            .filter(value => value.includes("id="))
            .map(value => value.split(" "))
            .flat()
            .map(value => my_regex.exec(value))
            .flatMap(value => value?.toString() ?? "")
            .filter(char => char !== "");

        const duplicatesList = idList.filter((value, index, array) =>
          array.indexOf(value) !== index
        ).filter((value, index, array) =>
          array.indexOf(value) === index
        ).sort();

        if (duplicatesList.length !== 0) {
          context.report({
            node,
            message: ErrorMessage.NO_DUPLICATE_ID(duplicatesList),
          });
        }
      },
    };
  },
};

export default noDuplicateId;
