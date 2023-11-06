const fs = require('fs');


if (process.argv.length < 4) {
  console.log('Usage: node exo4.js <filename> "Text to add to the file"');
  process.exit(1);
}

const fileName = process.argv[2];
const textToAdd = process.argv[3];


fs.writeFile(fileName, textToAdd, (err) => {
  if (err) {
    console.error(`Error creating the file: ${err.message}`);
  } else {
    console.log('The file has been saved!');
    
 
    fs.readFile(fileName, 'utf8', (readErr, data) => {
      if (readErr) {
        console.error(`Error reading the file: ${readErr.message}`);
      } else {
        console.log('Contents of the file:');
        console.log(data);
      }
    });
  }
});