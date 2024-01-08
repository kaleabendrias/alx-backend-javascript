function getStudentsByLocation(students, city) {
  const filtered = [];
  // eslint-disable-next-line array-callback-return
  students.filter((student) => {
    if (student.location === city) {
      filtered.push(student);
    }
  });
  return filtered;
}

export default getStudentsByLocation;
