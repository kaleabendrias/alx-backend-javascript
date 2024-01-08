function hasValuesFromArray(set, arr) {
  return arr.every((val) => set.has(val));
}
export default hasValuesFromArray;
