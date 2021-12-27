const fs = require('fs');

fs.readFile('data.csv', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Num of character in the file is ${data.length}.`);
});
