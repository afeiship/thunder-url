import ThurnderURL from '../src';

describe('api.basic', () => {
  test('Base URL encode:', () => {
    const u1 = 'http://www.dev.com/1.txt';
    const res = ThurnderURL.encode(u1);
    expect(res).toBe('thunder://QUFodHRwOi8vd3d3LmRldi5jb20vMS50eHRaWg==');
  });

  test('Base URL decode:', () => {
    const u1 = 'thunder://QUFodHRwOi8vd3d3LmRldi5jb20vMS50eHRaWg==';
    const res = ThurnderURL.decode(u1);
    expect(res).toBe('http://www.dev.com/1.txt');
  })
});
