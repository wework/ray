function validateNodeType(target) {
  if (
    target.nodeType !== Node.ELEMENT_NODE &&
    target.nodeType !== Node.DOCUMENT_NODE
  ) {
    throw new TypeError(
      'DOM document or DOM element should be given to search for and initialize this widget.'
    );
  }
}

export { validateNodeType }; // eslint-disable-line import/prefer-default-export
