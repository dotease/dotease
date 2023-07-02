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
  REQUIRE_LI_CONTAINER: 'List items must be contained within <ul> or <ol> or <menu> [require-li-container]',
};
