export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (const value of array) {
    newArr[array.indexOf(value)] = appendString + value;
  }

  return newArr;
}
