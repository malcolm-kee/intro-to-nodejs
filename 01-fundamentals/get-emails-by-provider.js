const fs = require('fs/promises');
const path = require('path');

async function getEmailsByProvider(provider) {
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

    return emails;
  } catch (err) {
    console.error(err);
  }
}

exports.getEmailsByProvider = getEmailsByProvider;
