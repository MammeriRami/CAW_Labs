const fs = require('fs');


if (process.argv.length < 3) {
  console.log('Usage: node exo4.js "Text to add to the file"');
  process.exit(1);
}

const textToAdd = process.argv[2];

const filePath = 'f.txt';

fs.writeFile(filePath, textToAdd, (err) => {
  if (err) {
    console.error(`Error creating the file: ${err.message}`);
  } else {
    console.log('The file has been saved!');
  }
});