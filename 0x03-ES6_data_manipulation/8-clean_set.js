function cleanSet(set, startString) {
  if (!set || !startString || typeof startString !== 'string' || !startString.length) {
    return '';
  }
  const result = [];
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  });
  return result.join('-');
}

export default cleanSet;
