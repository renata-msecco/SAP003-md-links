const fs = require('fs');

const regex = /\[(.+?)\]\((http[s]?:\/\/[^)]*)\)/gm;
const mdlinks = (path) => {
  return new Promise((resolve, reject) => {
    if (!path) {
      return reject('route not found');
    }
    
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
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