/**
 * returns a new ArrayBuffer with int8 value inserted inside
 * @param: length, position, value
 * returns
 */

export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
	throw new Error('Position outside range');
  }
  const buf = new DataView(new ArrayBuffer(length), 0, length);
  buf.setInt8(position, value);
  return buf;
}
