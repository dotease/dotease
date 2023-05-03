import * as fs from 'fs';
import parse from "node-html-parser";
import {DotElement, transformToDotElement} from "./elements/DotEaseElements";

const doc = fs.readFileSync('src/not-good.html');
const tree = parse(doc.toString());
const dotTree = transformToDotElement(tree.querySelector('body') ?? tree);

printTree(dotTree)

function printTree(root: DotElement) {
    if (!root.children) return;

    root.children.forEach((child) => {
        // tslint:disable-next-line:no-console
        console.log('%s - %s', child.kind, child.accessibilityAttributes);
        printTree(child);
    });
}
