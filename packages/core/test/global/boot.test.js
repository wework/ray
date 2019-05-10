import * as components from '../../src/components';

/* eslint-disable global-require */
const {
  default: boot,
  initializeAllComponents
} = require('../../src/global/js/boot');

describe('boot', () => {
  test('it initailizes all components if DOM is ready', async done => {
    Object.defineProperty(document, 'readyState', {
      value: 'complete',
      enumerable: true,
      configurable: true
    });

    const windowSpy = jest.spyOn(window, 'addEventListener');

    boot();

    expect(windowSpy).not.toHaveBeenCalled();

    done();
  });

  test('it will instantiate all components if DOM is not ready', async done => {
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

    done();
  });

  test('components', async done => {
    jest.mock();
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

    done();
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
