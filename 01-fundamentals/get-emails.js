const fs = require('fs');

fs.readFile('data.csv', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

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

  fs.writeFile('female-emails.txt', emails.join('\n'), 'utf-8', () => {
    console.log(`Done collecting ${emails.length} emails.`);
  });
});
