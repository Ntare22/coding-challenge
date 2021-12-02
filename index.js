// Are they the same?

// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, 
// with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements 
// in b are the elements in a squared, regardless of the order.

const arr1 = [2, 3, 5, 6]
const arr2 = [36, 9, 25, 4]

const comp = (a, b) => {
    if (a.length != b.length) return false;
    // sort both arrays
    const sortArr1 = a.sort((a, b) => a - b)
    const sortArr2 = b.sort((a, b) => a - b)
    // loop through array1
    for (let i = 0; i < sortArr1.length; i++) {
        let squareVal = sortArr1[i] * sortArr1[i]
        if (squareVal != sortArr2[i]) {
            return 'they are not the same';
        }
    }
    return 'they are the same';
    // square each value
    // compare to arr2
}

console.log(comp(arr1, arr2))