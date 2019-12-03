const fs = require('fs');

const regex = /\[(.+?)\]\((http[s]?:\/\/[^)]*)\)/gm;
// eslint-disable-next-line arrow-body-style
const mdlinks = (path) => {
  // eslint-disable-next-line consistent-return
  return new Promise((resolve, reject) => {
    if (!path) {
      // eslint-disable-next-line prefer-promise-reject-errors
      return reject('route not found');
    }
    // eslint-disable-next-line consistent-return
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        // eslint-disable-next-line prefer-promise-reject-errors
        return reject('path not found');
      }
      const links = data.match(regex)
        .map((item) => {
          const splited = item.split('](');
          return {
            text: splited[0].slice(1),
            href: splited[1].slice(0, -1),
          };
        });
      resolve(links);
    });
  });
};


module.exports = mdlinks;
