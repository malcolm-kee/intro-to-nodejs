const fs = require('fs/promises');
const path = require('path');

(async function emailsByProvider() {
  const provider = process.argv[2] || 'gmail';

  if (provider !== 'gmail' && provider !== 'hotmail' && provider !== 'yahoo') {
    console.error('Invalid provider.', provider);
    return;
  }

  try {
    const dataFilePath = path.resolve(__dirname, 'data.csv');

    const data = await fs.readFile(dataFilePath, 'utf-8');

    const lines = data.split('\n');

    const emails = [];

    lines.forEach((line, index) => {
      if (index !== 0) {
        const email = line.split(',').pop();

        if (email.endsWith(`@${provider}.com`)) {
          emails.push(email);
        }
      }
    });

    await fs.writeFile(`${provider}.txt`, emails.join('\n'), 'utf-8');
  } catch (err) {
    console.error(err);
  }
})();
