const fs = require('fs');

const args = process.argv.slice(2);

// separate flags and files
const flags = args.filter(arg => arg.startsWith('-'));
const files = args.filter(arg => !arg.startsWith('-'));

let lineNumber = 1;

files.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf-8');
    const lines = content.split('\n');

    lines.forEach(line => {
      if (flags.includes('-b')) {
        // number only non-empty lines
        if (line.trim() !== '') {
          console.log(`${lineNumber} ${line}`);
          lineNumber++;
        } else {
          console.log(line);
        }
      } else if (flags.includes('-n')) {
        // number all lines
        console.log(`${lineNumber} ${line}`);
        lineNumber++;
      } else {
        // normal output
        console.log(line);
      }
    });

  } catch (err) {
    console.error("Error reading file:", file);
  }
});

//commands 
// node cat.js sample-files/1.txt 
// node cat.js -n sample-files/1.txt
// node cat.js sample-files/*.txt
// node cat.js -n sample-files/*.txt
// node cat.js -b sample-files/3.txt

