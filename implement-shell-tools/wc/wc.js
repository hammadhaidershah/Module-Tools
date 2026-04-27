const fs = require('fs');

const args = process.argv.slice(2);

// separate flags and files
const flags = args.filter(arg => arg.startsWith('-'));
const files = args.filter(arg => !arg.startsWith('-'));

let totalLines = 0;
let totalWords = 0;
let totalChars = 0;

files.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf-8');

    const lines = content.split('\n').length;
    const words = content.trim() === '' ? 0 : content.trim().split(/\s+/).length;
    const chars = content.length;

    let output = [];

    if (flags.includes('-l')) output.push(lines);
    if (flags.includes('-w')) output.push(words);
    if (flags.includes('-c')) output.push(chars);

    // if no flags → show all
    if (flags.length === 0) {
      output = [lines, words, chars];
    }

    console.log(...output, file);

    totalLines += lines;
    totalWords += words;
    totalChars += chars;

  } catch (err) {
    console.error("Error reading:", file);
  }
});

// totals for multiple files
if (files.length > 1) {
  let totalOutput = [];

  if (flags.includes('-l')) totalOutput.push(totalLines);
  if (flags.includes('-w')) totalOutput.push(totalWords);
  if (flags.includes('-c')) totalOutput.push(totalChars);

  if (flags.length === 0) {
    totalOutput = [totalLines, totalWords, totalChars];
  }

  console.log(...totalOutput, "total");
}

// commands
// wc sample-files/*
//wc -l sample-files/3.txt
// wc -w sample-files/3.txt
// wc -c sample-files/3.txt
// wc -l sample-files/*