// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function createPhoneNumber(numbers) {
  let code = '';
  let mid = '';
  let end = '';
  for (num in numbers) {
    if (num < 3) {
      code += numbers[num]
    }
    if (num > 2 && num < 6) {
      mid += numbers[num]
    }
    if (num >5) {
      end += numbers[num]
    }
  }
  return `(${code}) ${mid}-${end}`
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))