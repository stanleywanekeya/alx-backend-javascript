/**
 * Returns an array of objects in a specific city
 * @param - list of students
 * @returns
 */

export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
	return students.filter((student) => student.location === city);
  }
  return [];
}
