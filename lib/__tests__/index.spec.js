const mdLinks = require('../index.js');

const arr = [
  { text: 'Markdown', href: 'https://pt.wikipedia.org/wiki/Markdown' },
  { text: 'Node.js', href: 'https://nodejs.org/' },
  { text: 'md-links', href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg' },
];

describe('mdLinks', () => {
  it('is a function', () => {
    expect(typeof mdLinks).toBe('function');
  });

  it('should return 3 links', (done) => {
    mdLinks('./lib/__tests__/teste.md').then((result) => {
      expect(result).toEqual(arr);
      done();
    });
  });

it('path not found', (done) => {
  mdLinks('./lib/__tests__/READMEE.md')
    .catch((result) => {
      expect(result).toEqual('path not found');
      done();
    });
});

it('route not found', (done) => {
  mdLinks('')
    .catch((result) => {
      expect(result).toEqual('route not found');
      done();
    });
  });
<<<<<<< HEAD
});
=======
});
>>>>>>> 5d33a3ee11563df8354d2806ef029ea72f5994d3
