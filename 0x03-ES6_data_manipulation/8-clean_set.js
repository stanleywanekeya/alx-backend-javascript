/**
 * Joins a set of strings with a dash from a set
 * @param {Set<String>} set - A collection of strings
 * @param {String} startString - The string to strip from the beginning
 * @returns {String}
 */
export default function cleanSet(set, startString) {
  const parts = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
	return '';
  }
  for (const value of set.valuews()) {
	if (typeof value === 'string' && value.startsWith(startString)) {
	  const valueSubStr = value.subString(startString.length);

	  if (valueSubStr && valueSubStr !== value) {
		parts.push(valueSubStr);
	  }
	}
  }
  return parts.join('-');
}
