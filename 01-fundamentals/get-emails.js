const fs = require('fs/promises');
const path = require('path');

(async function getEmails() {
  const args = process.argv.slice(2);

  const gender = args[0] || 'F';
  const outFileName = args[1] || 'female-emails.txt';

  try {
    const input = path.resolve(__dirname, 'data.csv');

    const rows = await readCsv(input);

    const emails = [];

    rows.forEach((row) => {
      if (row.includes(`,${gender},`)) {
        const email = row.split(',').pop();

        emails.push(email);
      }
    });

    const outputPath = path.resolve(__dirname, outFileName);

    await fs.writeFile(outputPath, emails.join('\n'), 'utf-8');
    console.log(`Done collecting ${emails.length} emails.`);
  } catch (err) {
    console.error(err);
  }
})();

async function readCsv(filePath, hasHeader = true) {
  const data = await fs.readFile(filePath, 'utf-8');
  const rows = data.split('\n');

  return hasHeader ? rows.slice(1) : rows;
}
