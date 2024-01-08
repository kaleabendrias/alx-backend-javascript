function cleanSet(set, startString) {
  const parts = [];
  if (!startString) {
    return '';
  }
  for (const value of set.values()) {
    if (value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);
      parts.push(valueSubStr);
    }
  }
  return parts.join('-');
}
export default cleanSet;
