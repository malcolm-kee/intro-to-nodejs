const fs = require('fs/promises');

(async function googleEmails() {
  try {
    const data = await fs.readFile('data.csv', 'utf-8');

    const lines = data.split('\n');

    const emails = [];

    lines.forEach((line, index) => {
      if (index !== 0) {
        const email = line.split(',').pop();

        if (email.endsWith('@gmail.com')) {
          emails.push(email);
        }
      }
    });

    await fs.writeFile('gmail.txt', emails.join('\n'), 'utf-8');
  } catch (err) {
    console.error(err);
  }
})();
