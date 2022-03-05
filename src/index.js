module.exports = function reverse (n) {
  let reverseNum = Math.abs(n).toString().split('').reverse().join('');
  return reverseNum;
}

