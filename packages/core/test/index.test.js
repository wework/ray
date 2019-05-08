describe('RayCore', () => {
  describe('library can be imported', () => {
    test('with no errors thrown', done => {
      expect(async () => {
        const { settings } = await require('../src'); // eslint-disable-line global-require
        expect(settings).toEqual({
          prefix: 'ray-',
          breakpointsInPixels: {
            phone: 0,
            tablet: 600,
            desktop: 1195
          }
        });
        done();
      }).not.toThrow();
    });
  });
});
