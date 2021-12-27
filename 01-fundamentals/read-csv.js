const fs = require('fs/promises');

async function readCsv(filePath, hasHeader = true) {
  const data = await fs.readFile(filePath, 'utf-8');
  const rows = data.split('\n');

  return hasHeader ? rows.slice(1) : rows;
}

// module.exports = readCsv;
exports.readCsv = readCsv;
