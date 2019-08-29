describe('@wework/ray-product-react', () => {
  test('can be imported with no errors', () => {
    expect(() => {
      require('../src'); // eslint-disable-line global-require
    }).not.toThrow();
  });
});
