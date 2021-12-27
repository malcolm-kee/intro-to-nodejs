const fs = require('fs/promises');
const path = require('path');

(async function getEmails() {
  const args = process.argv.slice(2);

  const gender = args[0] || 'F';
  const outFileName = args[1] || 'female-emails.txt';

  try {
    const input = path.resolve(__dirname, 'data.csv');

    const data = await fs.readFile(input, 'utf-8');

    const rows = data.split('\n');

    const emails = [];

    rows.forEach((row, index) => {
      if (index !== 0) {
        if (row.includes(`,${gender},`)) {
          const email = row.split(',').pop();

          emails.push(email);
        }
      }
    });

    const outputPath = path.resolve(__dirname, outFileName);

    await fs.writeFile(outputPath, emails.join('\n'), 'utf-8');
    console.log(`Done collecting ${emails.length} emails.`);
  } catch (err) {
    console.error(err);
  }
})();
