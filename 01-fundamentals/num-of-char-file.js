const { readFileContent } = require('./read-file-content');

(async function numOfChar() {
  const fileName = process.argv[2];

  if (!fileName) {
    console.error('fileName is not provided.');
    return;
  }

  try {
    const data = await readFileContent(fileName);

    console.log(`Num of character in the file is ${data.length}.`);
  } catch (err) {
    console.error(err);
  }
})();
