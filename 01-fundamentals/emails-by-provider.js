const fs = require('fs/promises');
const { getEmailsByProvider } = require('./get-emails-by-provider');

(async function emailsByProvider() {
  const provider = process.argv[2] || 'gmail';

  if (provider !== 'gmail' && provider !== 'hotmail' && provider !== 'yahoo') {
    console.error('Invalid provider.', provider);
    return;
  }

  try {
    const emails = await getEmailsByProvider(provider);

    await fs.writeFile(`${provider}.txt`, emails.join('\n\n'), 'utf-8');
  } catch (err) {
    console.error(err);
  }
})();
