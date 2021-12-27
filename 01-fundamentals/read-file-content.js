const fs = require('fs/promises');

exports.readFileContent = function readFileContent(filePath) {
  return fs.readFile(filePath, 'utf-8');
};
