const fs = require('fs/promises');

(async function getEmails() {
  try {
    const data = await fs.readFile('data.csv', 'utf-8');

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

    await fs.writeFile('female-emails.txt', emails.join('\n'), 'utf-8');
    console.log(`Done collecting ${emails.length} emails.`);
  } catch (err) {
    console.error(err);
  }
})();
