import fn from '../src';

describe('api.basic', () => {
  test('Base URL', () => {
    const u1 = 'http://www.dev.com/1.txt';
    const res = fn(u1);
    expect(res).toBe('thunder://QUFodHRwOi8vd3d3LmRldi5jb20vMS50eHRaWg==');
  });
});
