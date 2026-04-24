const fs = require('fs');

const args = process.argv.slice(2);

const hasOneFlag = args.includes('-1');
const hasAFlag = args.includes('-a');

const dir = args.find(arg => !arg.startsWith('-')) || '.';

if (!hasOneFlag) {
  console.log("Only -1 flag is supported");
  process.exit(1);
}

try {
  let files = fs.readdirSync(dir);

  if (!hasAFlag) {
    files = files.filter(file => !file.startsWith('.'));
  }

  files.sort();

  files.forEach(file => {
    console.log(file);
  });

} catch (err) {
  console.error("Error:", err.message);
}

// commands
// node ls.js -1
// node ls.js -1 -a
// node ls.js -1 sample-files
// node ls.js -1 -a sample-files