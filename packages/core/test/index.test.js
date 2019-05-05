describe('RayCore', () => {
  describe('library can be imported', () => {
    test('with no errors thrown', done => {
      expect(async () => {
        await require('../src'); // eslint-disable-line global-require
        done();
      }).not.toThrow();
    });
  });
});
