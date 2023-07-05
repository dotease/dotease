import { recommended } from './configs/recommended';
import exampleRule from './rules/example-rule';
import requireImgAlt from './rules/require-img-alt';
import promoteSemanticElementsForAccessibility from './rules/promote-semantic-elements-for-accessibility';
import noBlankTarget from './rules/no-blank-target';
import noObsoleteTags from './rules/no-obsolete-tags';

export type ARIARole =
  | 'alert'
  | 'alertdialog'
  | 'application'
  | 'article'
  | 'banner'
  | 'button'
  | 'cell'
  | 'checkbox'
  | 'columnheader'
  | 'combobox'
  | 'complementary'
  | 'contentinfo'
  | 'definition'
  | 'dialog'
  | 'directory'
  | 'document'
  | 'feed'
  | 'figure'
  | 'form'
  | 'grid'
  | 'gridcell'
  | 'group'
  | 'heading'
  | 'img'
  | 'input'
  | 'link'
  | 'list'
  | 'listbox'
  | 'listitem'
  | 'log'
  | 'main'
  | 'marquee'
  | 'math'
  | 'menu'
  | 'menubar'
  | 'menuitem'
  | 'menuitemcheckbox'
  | 'menuitemradio'
  | 'navigation'
  | 'none'
  | 'note'
  | 'option'
  | 'presentation'
  | 'progressbar'
  | 'radio'
  | 'radiogroup'
  | 'region'
  | 'row'
  | 'rowgroup'
  | 'rowheader'
  | 'scrollbar'
  | 'search'
  | 'searchbox'
  | 'separator'
  | 'slider'
  | 'spinbutton'
  | 'status'
  | 'switch'
  | 'tab'
  | 'table'
  | 'tabpanel'
  | 'term'
  | 'textbox'
  | 'timer'
  | 'toolbar'
  | 'tooltip'
  | 'tree'
  | 'treegrid'
  | 'treeitem';

export type HTMLInputType =
  | 'text'
  | 'number'
  | 'password'
  | 'email'
  | 'tel'
  | 'url'
  | 'search'
  | 'date'
  | 'time'
  | 'datetime-local'
  | 'week'
  | 'month'
  | 'file'
  | 'checkbox'
  | 'radio'
  | 'range'
  | 'color'
  | 'hidden'
  | 'submit'
  | 'reset'
  | 'button';

export type HtmlNode = keyof HTMLElementTagNameMap;

export const configs = {
  recommended,
};

export const rules = {
  'example-rule': exampleRule,
  'require-img-alt': requireImgAlt,
  'promote-semantic-elements-for-accessibility': promoteSemanticElementsForAccessibility,
  'no-blank-target': noBlankTarget,
  'no-obsolete-tags': noObsoleteTags,
};

module.exports = {
  configs,
  rules,
};
