module.exports = function (array) {
  return array.reduce((c, v) => c ^ v);
};
