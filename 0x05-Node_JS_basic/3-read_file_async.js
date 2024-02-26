const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');

      if (lines.length <= 1) {
        console.log('Number of students: 0');
        resolve();
        return;
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

      let totalStudents = 0;

      Object.keys(students).forEach((field) => {
        const numStudents = students[field].length;
        totalStudents += numStudents;
        console.log(`Number of students in ${field}: ${numStudents}. List: ${students[field].join(', ')}`);
      });

      console.log(`Number of students: ${totalStudents}`);
      resolve();
    });
  });
}

module.exports = countStudents;
