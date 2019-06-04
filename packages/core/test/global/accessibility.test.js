import setupAccessibility from '../../src/global/js/accessibility';

describe('accessibility', () => {
  afterEach(() => {
    document.body.classList = null;
  });

  test('it works with SSR', () => {
    expect(() => {
      const tempDocument = global.document;
      global.document = undefined;
      setupAccessibility();
      global.document = tempDocument;
    }).not.toThrow();
  });

  test('should add keyboard nav class to body', () => {
    setupAccessibility();

    expect(document.body.classList.value).not.toMatch(/ray-js-keyboard-nav/);

    const keydownEvent = new KeyboardEvent('keydown');
    document.dispatchEvent(keydownEvent);

    expect(document.body.classList.value).toMatch(/js-ray-keyboard-nav/);
  });
});
