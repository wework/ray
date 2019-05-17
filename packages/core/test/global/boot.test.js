import * as components from '../../src/components';

/* eslint-disable global-require */
const {
  default: boot,
  initializeAllComponents
} = require('../../src/global/js/boot');

describe('boot', () => {
  test('it initailizes all components if DOM is ready', () => {
    Object.defineProperty(document, 'readyState', {
      value: 'complete',
      enumerable: true,
      configurable: true
    });

    const windowSpy = jest.spyOn(window, 'addEventListener');

    boot();

    expect(windowSpy).not.toHaveBeenCalled();
  });

  test('it will instantiate all components if DOM is not ready', () => {
    Object.defineProperty(document, 'readyState', {
      value: 'loading',
      enumerable: true,
      configurable: true
    });

    const windowSpy = jest.spyOn(window, 'addEventListener');

    boot();

    expect(windowSpy).toHaveBeenCalledWith(
      'DOMContentLoaded',
      expect.anything()
    );
  });

  test('components', () => {
    Object.defineProperty(document, 'readyState', {
      value: 'loading',
      enumerable: true,
      configurable: true
    });

    const windowSpy = jest.spyOn(window, 'addEventListener');

    boot();

    expect(windowSpy).toHaveBeenCalledWith(
      'DOMContentLoaded',
      expect.anything()
    );
  });

  describe('initializeAllComponents()', () => {
    test('it calls #createAll on all components', () => {
      const componentNames = Object.keys(components);
      const createAllSpys = [];

      componentNames.forEach(componentName => {
        createAllSpys.push(jest.spyOn(components[componentName], 'createAll'));
      });

      initializeAllComponents();

      createAllSpys.forEach(spy => {
        expect(spy).toHaveBeenCalled();
      });
    });
  });
});
