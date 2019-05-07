/* eslint-disable global-require */

describe('boot', () => {
  test('it initailizes all components if DOM is ready', async done => {
    Object.defineProperty(document, 'readyState', {
      value: 'complete',
      enumerable: true,
      configurable: true
    });

    const windowSpy = jest.spyOn(window, 'addEventListener');

    const boot = require('../../src/global/js/boot').default;
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

    const boot = require('../../src/global/js/boot').default;
    boot();

    expect(windowSpy).toHaveBeenCalledWith(
      'DOMContentLoaded',
      expect.anything()
    );

    done();
  });
});
