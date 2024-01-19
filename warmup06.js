/**
 * 1. write a function to Reverse an array without use array.reverse() method:
 * ex: reverseArray([1,2,3]) ==> [3,2,1]
 */
let reverseArray=(array)=> {
    let reversed= []
    for (let i =  array.length-1; i>=0; i--) {
       reversed.push(array[])
        
    }
return reversed
}


/**
 * 2 - Write a function called counter that, when invoked, always returns a number that is one more than the previous invocation. For instance:
 * counting(5); // => '1, 2, 3, 4, 5'
 * counting(1); // => '1'
 * counting(3); // => '1, 2, 3'
 */

let countring = (number) => {
    let counter =""
    for (let i = 1; i<=number ; i++) {
        if (i===number) {counter+=i
            
        }
        else{ counter += i+" ,"}
        
    }
return counter
}


/**
 * 3-write a function called (midElement) that takes an array as an argument and returns the element that is located in the middle of that array.
 * @param {Array<any>} array
 * @return {any}
 */

let midElement=(array) =>{
       
return array.flat(Math.floor(array.length/2))

}

/**
 * 4 - write a function called (sameLength) that takes array of strings and returns an array of the strings that have the same length
 * example :  ['hi','hello','welcome','hy'] ==> ["hi","hy"]
 *
 * @param {Array<string>} array
 * @return {Array<string>}
 */

  
function sameLength(array) {
  
}

/**
 * 5. Given an array of integers and an integer n.
 * find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.
 * If n is not in the given array, return an empty array [].
 * Assume that n and all values in the given array will always be integers.
 * Example:
 * findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]
 *
 * @param {Array} array
 * @param {number} n
 * @return {Array}
 */


 let findAll = function (array, n) {
    let output=[]
    for (let i = 0; i < array.length; i++) {
        if (array[i]===number) {
            array.push(i)
        }
        
    }return output
   
};

// 6. write a function that takes a string as an argument
// and returns the string reversed word by word
// Example : reverseWord("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .

let reverseWord=(string) => {

}


//7.Write a function called sumOfFirstAndLast that 
//takes a number as a parameter and returns the sum of the first and last digits. Please do this without turning the number into a string.

function sumOfFirstAndLast(number) {
 
} 






