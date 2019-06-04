import setupAccessibility from '../../src/global/js/accessibility';

describe('accessibility', () => {
  afterEach(() => {
    document.body.classList = null;
  });

  test('it works with SSR', () => {
    expect(() => {
      const spy = jest.spyOn(document, 'addEventListener');
      const realDocument = global.document;

      Object.defineProperty(global, 'document', {
        value: undefined,
        writable: true
      });

      setupAccessibility();

      Object.defineProperty(global, 'document', {
        value: realDocument,
        writable: true
      });

      expect(spy).not.toHaveBeenCalled();
    }).not.toThrow();
  });

  test('should add keyboard nav class to body', () => {
    setupAccessibility();

    expect(document.body.classList.value).not.toMatch(/ray-js-keyboard-nav/);

    const keydownEvent = new KeyboardEvent('keydown');
    document.dispatchEvent(keydownEvent);

    expect(document.body.classList.value).toMatch(/js-ray-keyboard-nav/);
  });

  test('should remove keyboard nav class to body', () => {
    setupAccessibility();

    document.body.classList.add('ray-js-keyboard-nav');
    expect(document.body.classList.value).toMatch(/ray-js-keyboard-nav/);

    const mouseEvent = new MouseEvent('mousedown');
    document.dispatchEvent(mouseEvent);

    expect(document.body.classList.value).not.toMatch(/js-ray-keyboard-nav/);
  });
});
