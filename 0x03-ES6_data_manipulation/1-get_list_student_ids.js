/**
 * Retrieves ids from a list of students
 * @param student
 * @returns
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
	return students.map((student) => student.id);
  }
  return [];
}
