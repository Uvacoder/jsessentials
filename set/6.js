// Write a function that takes a Set and an array as arguments
// If not already existing, add each element in the array to the Set
// Return the modified Set

function myFunction(set, arr) {
    arr.forEach(element => {
        set.add(element)
    })
    return set
 }

console.log(myFunction(new Set([1, 2, 3]), [4, 5, 6]))
// Expected
// new Set([1, 2, 3, 4, 5, 6 ])
console.log(myFunction(new Set('12345'), [...'6789']))
// Expected
// new Set([...'123456789'])
console.log(myFunction(new Set([1, 2, 3]), [2, 3]))
// Expected
// new Set([1, 2, 3])