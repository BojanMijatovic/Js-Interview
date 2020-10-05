// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

  //  Solution 1
  // return str.split('').reverse().join('');

  //  Solution 2 
  // let reverseStr = '';
  // for (let rev of str) {
  //   reverseStr = rev + reverseStr;
  // }
  // return reverseStr;

  //  Solution 3 Reduce
  // return str.split('').reduce((total, current) => current + total);

  return str.split('').reverse().join('');
}


module.exports = reverse;
