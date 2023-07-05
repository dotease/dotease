export const ErrorMessage = {
  REQUIRE_IMG_ALT: 'Image elements must include the alt attribute [require-img-alt]',
  REQUIRE_IMG_ALT_EMPTY: 'Image elements must include a non-empty alt attribute [require-img-alt]',
  PROMOTE_SEMANTIC_ELEMENTS_FOR_ACCESSIBILITY(
    replacement: string,
    nodeName: string,
    attributeName: string,
    roleName: string,
  ) {
    return `Use <${replacement}> instead of <${nodeName} ${attributeName}="${roleName}">`;
  },
  NO_BLANK_TARGET: 'For performance and security issues, do not use target="_blank" in your code',
  NO_OBSOLETE_TAGS(tagName: string, replacement = '', css = false) {
    if (css) {
      return `Use ${replacement} instead of ${tagName}`;
    }
    return `Use <${replacement}> instead of <${tagName}>`;
  },
};
