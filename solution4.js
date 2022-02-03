// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// "abcde" -> 0
// "aabbcde" -> 2 

function duplicateCount(text){
    let result = {};
    for (let i = 0; i < text.length; i++) {
      let char = text[i].toLowerCase()
      
      if (/[a-z]/.test(char)) {
        if (result[char] > 0) {
          result[char]++;
        } else {
          result[char] = 1;
          }
        }
      }
    
      let charArr = []
      for (char in result) {
        if (result[char] > 1) {
          charArr.push(char)
        }
      }
      return charArr.length;
    
  }