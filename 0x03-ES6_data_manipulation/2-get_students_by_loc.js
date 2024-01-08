function getStudentsByLocation(students, city) {
  const filtered = [];
  students.filter((student) => {
    if (student.location === city) {
      filtered.push(student);
    }
  });
  return filtered;
}

export default getStudentsByLocation;
