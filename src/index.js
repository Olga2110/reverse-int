module.exports = function reverse(n) {
  const str = Math.abs(n).toString();
  const arr = str.split('');
  const result = Number(arr.reverse().join(''));
  return result;
};
