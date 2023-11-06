const fs = require('fs');


if (process.argv.length < 3) {
  console.log('Usage: node ReadFile.js <filename>');
  process.exit(1);
}


const filePath = process.argv[2];


fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading the file: ${err.message}`);
  } else {
    console.log(data);
  }
});