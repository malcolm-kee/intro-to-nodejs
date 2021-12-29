const fs = require('fs/promises');
const path = require('path');
const { parse } = require('csv-parse');

function parseCsv(raw) {
  return new Promise((fulfill, reject) => {
    parse(raw, { columns: true }, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        fulfill(rows);
      }
    });
  });
}

async function getEmailsByProvider(provider) {
  if (provider !== 'gmail' && provider !== 'hotmail' && provider !== 'yahoo') {
    console.error('Invalid provider.', provider);
    return;
  }

  try {
    const dataFilePath = path.resolve(__dirname, 'data.csv');

    const data = await fs.readFile(dataFilePath, 'utf-8');

    const lines = await parseCsv(data);

    const emails = [];

    lines.forEach((line) => {
      if (line.Email.endsWith(`@${provider}.com`)) {
        emails.push(line.Email);
      }
    });

    return emails;
  } catch (err) {
    console.error(err);
  }
}

exports.getEmailsByProvider = getEmailsByProvider;
