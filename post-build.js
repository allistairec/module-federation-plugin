const fs = require('fs');

const index = fs.readFileSync('./libs/mf/src/index.ts', { encoding: 'utf-8' });
fs.writeFileSync('./dist/libs/mf/src/index.js', index);

const nguniversal = fs.readFileSync('./libs/mf/src/nguniversal.ts', {
  encoding: 'utf-8',
});
fs.writeFileSync('./dist/libs/mf/src/nguniversal.js', nguniversal);
