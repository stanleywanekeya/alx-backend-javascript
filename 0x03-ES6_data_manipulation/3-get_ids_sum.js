/**
 * returns the sum of all students id
 * @param - student list
 * @returns
 */

export default function getStudentIdsSum (students) {
  if (students instanceof Array) {
	return students.reduce(
	  (prevStudent, curStudent) => prevStudent.id || prevStudent + curStudent.id,
	  0,
	);
  }
  return 0;
}
