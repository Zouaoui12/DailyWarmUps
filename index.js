function opposite(boolean){
    return  !boolean
}
function greaterThan5(number1,number2){
    if(number1>5||number2>5) {
        return true
    }
    else return false
    
}
function  allGreaterThan5(n1,n2){
    if( n1>5 &&n2>5 ){
    return true }
 
    return false
}

function largerThan5AndLessThan20(number) {
    if (number>5 && number>20){return true
        
    }
    return false
        

    } 
    // 1.Write a function called areValidCredentials that takes name and password as a parameter and returns true if the name is longer than 3 characters, AND, the password is at least 8 characters long.
    // Otherwise, it returns false.
let  areValidCredentials = (Name,password)=> {
if (Name>3 && password<8) { return true} return false }
// 2.Write a function called findMinLengthOfThreeWords that takes three words as parameters and 
//returns the length of the shortest word.
let findMinLengthOfThreeWords = (stg1,stg2,stg3)=>{
    if ("stg1".length>=5 && "stg2".length>=5 && "stg3".length>=5  ) {return true
        
    } return false
}
//3.Write a function called findMaxLengthOfThreeWords that takes three words as parameters 
//and returns the length of the longest word.




//4.Write a function called guessMyNumber that takes a number as a parameter and compares it to a random number between 0 and 5, 
//and returns one of the following strings: 'You guessed my number!' 
//if the number matches the random number. 'Nope! That wasn't it!' 
//if the number did not match the random number. 
//HINT: Look at these functions on MDN to learn how they work: Math.random, Math.floor and Math.ceil.
let guessMyNumber = number => 



   

