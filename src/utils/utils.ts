import {ARIARole, HtmlNode} from "../index";
import {TSESTree} from "@typescript-eslint/types";

export const replaceableRolesMap = new Map<ARIARole, HtmlNode>([
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

export function hasLiteralValue(node: TSESTree.JSXAttribute) {
    return node.value?.type === "Literal" || (node.value?.type === "JSXExpressionContainer" && node.value.expression?.type === "Literal") || false;
}
