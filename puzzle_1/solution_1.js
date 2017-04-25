module.exports = function (array) {
  if (array.length === 1) return array[0];

  const sortedArray = array.sort();
  for (let i = 1; i < sortedArray.length - 1; i += 1) {
    if (array[i] !== array[i - 1] && array[i] !== array[i + 1]) return array[i];
  }

  return sortedArray[sortedArray.length - 1];
};
