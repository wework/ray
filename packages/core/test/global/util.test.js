import { validateNodeType } from '../../src/global/js/util';

describe('util', () => {
  describe('validateNodeType', () => {
    test('it throws error if node type is not element', () => {
      expect(() =>
        validateNodeType(document.createTextNode('some text'))
      ).toThrow(
        'DOM document or DOM element should be given to search for and initialize this widget.'
      );
    });

    test('it does not throw if element or document', () => {
      expect(() => validateNodeType(document)).not.toThrow();
      expect(() => validateNodeType(document)).not.toThrow();
    });
  });
});
