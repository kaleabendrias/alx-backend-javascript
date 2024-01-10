interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
};

const student1: Student = {
    firstName: 'Amanual',
    lastName: 'tesfay',
    age: 18,
    location: 'New York'
};

const student2: Student = {
    firstName: 'teumay',
    lastName: 'assefa',
    age: 18,
    location: 'New York'
};

const studentsList: Array<Student> = [student1, student2];

// Vanilla JavaScript to render a table
const table = document.createElement('table');
const headerRow = table.insertRow();
const header1 = headerRow.insertCell(0);
const header2 = headerRow.insertCell(1);

header1.textContent = 'First Name';
header2.textContent = 'Location';

studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

document.body.appendChild(table);