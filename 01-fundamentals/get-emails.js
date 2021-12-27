const fs = require('fs/promises');
const path = require('path');

(async function getEmails() {
  try {
    const input = path.resolve(__dirname, 'data.csv');

    const data = await fs.readFile(input, 'utf-8');

    const rows = data.split('\n');

    const emails = [];

    rows.forEach((row, index) => {
      if (index !== 0) {
        if (row.includes(',F,')) {
          const email = row.split(',').pop();

          emails.push(email);
        }
      }
    });

    const outputPath = path.resolve(__dirname, 'female-emails.txt');

    await fs.writeFile(outputPath, emails.join('\n'), 'utf-8');
    console.log(`Done collecting ${emails.length} emails.`);
  } catch (err) {
    console.error(err);
  }
})();
