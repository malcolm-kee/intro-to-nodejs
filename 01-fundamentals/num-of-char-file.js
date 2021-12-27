const fs = require('fs/promises');

(async function numOfChar() {
  const fileName = process.argv[2];

  if (!fileName) {
    console.error('fileName is not provided.');
    return;
  }

  try {
    const data = await fs.readFile(fileName, 'utf-8');

    console.log(`Num of character in the file is ${data.length}.`);
  } catch (err) {
    console.error(err);
  }
})();
