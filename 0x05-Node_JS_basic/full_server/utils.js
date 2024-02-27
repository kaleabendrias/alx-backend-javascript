const fs = require('fs').promises;

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n');

    if (lines.length <= 1) {
      return {};
    }

    const students = {};

    lines.slice(1).forEach((line) => {
      const fields = line.split(',');
      const field = fields[fields.length - 1].trim();

      if (!students[field]) {
        students[field] = [];
      }

      students[field].push(fields[0]);
    });

    return students;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = readDatabase;
