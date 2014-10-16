  var fs = require('fs');
  var grabString = require('../lib/grab-string');

  var input = fs.createReadStream('README.md');
  var output = fs.createWriteStream('copy-of-README.md')
  
  input
    .pipe(grabString(console.log))
    .pipe(output);