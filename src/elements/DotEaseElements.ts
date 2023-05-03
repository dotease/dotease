import {HTMLElement} from "node-html-parser";

type DotSemanticElementKind = keyof HTMLElementTagNameMap;

interface DotElement {
    accessibilityAttributes: Partial<AccessibilityAttributes>;
    ariaRules: Partial<AriaRules>;
    children: DotElement[];
    className?: string;
    id?: string;
    kind: DotSemanticElementKind;
    parent: DotElement;
}

interface AccessibilityAttributes {
    alt?: string;
    ariaDescribedBy?: string;
    ariaHidden?: boolean;
    ariaLabel?: string;
    role?: string;
    tabIndex?: number;
}

type AccessibilityAttribute = keyof AccessibilityAttributes;

interface AriaRules {
    'aria-activedescendant'?: string;
    'aria-atomic'?: boolean | 'false' | 'true';
    'aria-autocomplete'?: 'inline' | 'list' | 'both' | 'none';
    'aria-busy'?: boolean | 'false' | 'true';
    'aria-checked'?: boolean | 'false' | 'mixed' | 'true';
    'aria-colcount'?: number;
    'aria-colindex'?: number;
    'aria-colspan'?: number;
    'aria-controls'?: string;
    'aria-current'?: boolean | 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time';
    'aria-describedby'?: string;
    'aria-details'?: string;
    'aria-disabled'?: boolean | 'false' | 'true';
    'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup';
    'aria-errormessage'?: string;
    'aria-expanded'?: boolean | 'false' | 'true';
    'aria-flowto'?: string;
    'aria-grabbed'?: boolean | 'false' | 'true';
    'aria-haspopup'?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
    'aria-hidden'?: boolean | 'false' | 'true';
    'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling';
    'aria-keyshortcuts'?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-level'?: number;
    'aria-live'?: 'off' | 'assertive' | 'polite';
    'aria-modal'?: boolean | 'false' | 'true';
    'aria-multiline'?: boolean | 'false' | 'true';
    'aria-multiselectable'?: boolean | 'false' | 'true';
    'aria-orientation'?: 'horizontal' | 'vertical';
    'aria-owns'?: string;
    'aria-placeholder'?: string;
    'aria-posinset'?: number;
    'aria-pressed'?: boolean | 'false' | 'mixed' | 'true';
    'aria-readonly'?: boolean | 'false' | 'true';
    'aria-relevant'?: 'additions' | 'additions text' | 'all' | 'removals' | 'text' | 'additions removals';
    'aria-required'?: boolean | 'false' | 'true';
    'aria-roledescription'?: string;
    'aria-rowcount'?: number;
    'aria-rowindex'?: number;
    'aria-rowspan'?: number;
    'aria-selected'?: boolean | 'false' | 'true';
    'aria-setsize'?: number;
    'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other';
    'aria-valuemax'?: number;
    'aria-valuemin'?: number;
    'aria-valuenow'?: number;
    'aria-valuetext'?: string;

    // Custom ARIA attributes (not in the official spec)
    [key: string]: any;
}

type AriaRule = keyof AriaRules;

function transformToDotElement(element: HTMLElement, parent: DotElement | null = null): DotElement {
    const dotElement: DotElement = {
        parent: parent!,
        kind: element.tagName.toLowerCase() as DotSemanticElementKind,
        ariaRules: {},
        accessibilityAttributes: {},
        children: [],
    };

    // Process accessibility attributes
    const accessibilityAttributes: AccessibilityAttributes = {
        alt: undefined,
        role: undefined,
        ariaLabel: undefined,
        ariaDescribedBy: undefined,
        ariaHidden: undefined,
        tabIndex: undefined,
    };
    const attributes = element.attributes;
    for (const attributeName in attributes) {
        if (Object.keys(accessibilityAttributes).includes(attributeName)) {
            // @ts-ignore
            accessibilityAttributes[attributeName as AccessibilityAttribute] = element.attributes[attributeName];
        }
    }
    dotElement.accessibilityAttributes = accessibilityAttributes;

    // Process child nodes
    const childNodes = element.childNodes;

    // TODO: remove les règles de merde tslint là
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < childNodes.length; i++) {
        const childNode = childNodes[i];
        if (childNode instanceof HTMLElement) {
            const childDotElement = transformToDotElement(childNode, dotElement);
            dotElement.children.push(childDotElement);
        }
    }

    return dotElement;
}



export {
    DotElement,
    AriaRule,
    AriaRules,
    AccessibilityAttributes,
    transformToDotElement
}