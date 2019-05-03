describe('RayCore', () => {
  describe('library can be imported', () => {
    test('it can be imported with no errors', done => {
      expect(async () => {
        await require('../src'); // eslint-disable-line global-require
        done();
      }).not.toThrow();
    });
  });
});
