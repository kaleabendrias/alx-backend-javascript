export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (const [index, value] of array.entries()) {
    newArr[index] = appendString + value;
  }

  return newArr;
}
