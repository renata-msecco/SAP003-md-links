const chalk = require('chalk');
const mdLinks = require('./lib/index.js');

const path = process.argv.slice(0).pop();
mdLinks(path)
  .then((result) => {
    
    result.map((res) => {
     
      console.log('\n', chalk.red(res.text.substring(0, 50)), '\n', res.href);
    });
  })
  
  .catch(error => console.log(error));
  