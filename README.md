node-stream-grab-string
=======================

Quick-and-dirty function for extracting a string from a Node text stream

##Installation

    npm install grab-string

##Usage

    var grabString = require('grab-string');

    var input = fs.createReadStream('README.md');
    var output = fs.createWriteStream('copy-of-README.md')

    input
        .pipe(grabString(console.log))
        .pipe(output);

    //prints the contents of README.md to the console, and also writes them to copy-of-README.md
    //note that console.log is only called once

##Notes

This should not be used on a real system, this is just a quick shortcut for non-performance-intensive tasks.