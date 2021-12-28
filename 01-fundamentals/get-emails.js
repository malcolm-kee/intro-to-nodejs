const fs = require('fs/promises');
const path = require('path');
const { parse } = require('csv-parse');

function parseCsv(string) {
  return new Promise((resolve, reject) => {
    parse(string, { columns: true }, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

(async function getEmails() {
  const args = process.argv.slice(2);

  const gender = args[0] || 'F';
  const outFileName = args[1] || 'female-emails.txt';

  try {
    const input = path.resolve(__dirname, 'data.csv');

    const raw = await fs.readFile(input, 'utf-8');

    const rows = await parseCsv(raw);

    const emails = [];

    rows.forEach((row) => {
      if (row.Gender === gender) {
        emails.push(row.Email);
      }
    });

    const outputPath = path.resolve(__dirname, outFileName);

    await fs.writeFile(outputPath, emails.join('\n'), 'utf-8');
    console.log(`Done collecting ${emails.length} emails.`);
  } catch (err) {
    console.error(err);
  }
})();
