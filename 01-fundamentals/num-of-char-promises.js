const fs = require('fs/promises');

(async function numOfChar() {
  try {
    const data = await fs.readFile('data.csv', 'utf-8');

    console.log(`Num of character in the file is ${data.length}.`);
  } catch (err) {
    console.error(err);
  }
})();
