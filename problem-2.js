// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

// Example:

// Input: "programming"
// Output: 3
//Answer:

function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i].toLowerCase()) !== -1) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("programming"));

