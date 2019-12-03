#! /usr/bin/env node
const chalk = require('chalk');
const mdLinks = require('./lib/index.js');

const path = process.argv.slice(0).pop();
mdLinks(path)
  .then((result) => {
    // eslint-disable-next-line array-callback-return
    result.map((res) => {
      // eslint-disable-next-line no-console
      console.log('\n', chalk.red(res.text.substring(0, 50)), '\n', res.href);
    });
  })
  // eslint-disable-next-line no-console
  .catch(error => console.log(error));
