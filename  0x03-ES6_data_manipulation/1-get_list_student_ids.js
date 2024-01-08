function getListStudentIds(students) {
  const allStudents = [];
  if (Array.isArray(students)) {
    // eslint-disable-next-line array-callback-return
    students.map((student) => {
      allStudents.push(student.id);
    });
  }
  return allStudents;
}

export default getListStudentIds;
