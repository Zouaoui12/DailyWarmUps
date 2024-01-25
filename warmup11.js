/**
 * 1 - Write a function named objSort to sort an array of JavaScript objects based on the id
 * objSort([{id:2,value:50},{id:0,value:70},{id:1,value:40}]) ==> [{id:0,value:70},{id:1,value:40},{id:2,value:50}]
 *
 * @function objSort
 * @param {Array<{id: number, value: number}>} obj
 * @return {Array}
 */


function objSort(array) {
    return array.sort((a, b) => a.id - b.id)
}

/**2. write a closure function called Counter that have 2 behaviours and a state to check the counter and when invoked it increase or decrease the counter. 
//!! ps : the function should return an object ! 
ex : let myCount = Counter();
myCount.up() => 1 
myCount.up() => 2 
myCount.down() => 1 
myCount.counter => 1 
**/

let Counter = () => { // class Counter ( that take form of a function)
    let obj = {}
    obj.counter = 0
    obj.up = up
    obj.down = down
    return obj 
}

let up = function() {
    this.counter++
    return this.counter 
}

let down = function(){
    if(this.counter) {
         this.counter--
    }
   
    return this.counter + " cannot go down"
}
let nassimCount = Counter() // instance 

// 3. Think about some different attributes of books – what do all books have? Ideas include:

//  Title 
//  Author 
//  MSRP 
//  Genre 
//  Number of Pages 
//  Description
// . In terms of the properties of books that you thought of, represent the following books as data:
//  Harry Potter and the Sorcerer's Stone (J.K. Rowling) 
//  Romeo and Juliet (William Shakespeare) 
//  Structure and Interpretation of Computer Programs (Gerald Jay Sussman, Hal Abelson) 
//  NOTE: Did you account for the possibility of two authors? If not, update your model to handle multiple authors. 
//  Three other books (see this list for ideas)
// You may have been rewriting the same type of object over and over. We need to stay DRY (Do Not Repeat). 
// Write a function makeBook that takes as arguments different attributes of a book and returns an object representing that book that has the proper structure (we call this a factory function).
// You may have been rewriting the same type of object over and over. We need to stay DRY (Do Not Repeat). Write a function makeBook that takes as arguments different attributes of a book and returns an object representing that book that has the proper structure (we call this a factory function).

//  Look at one of your book objects in the console. This is the object inspector. The object inspector is nice to have, but it will be easier to have a function to display the more important information easily. Write a function called displayBook that takes a book as an argument, and returns the important information in a more readable way,

// for example:

// var sorcerersStone = { /* ... */ } 
//  function displayBook(book) { 
//        // ... 
//  } 
//  displayBook(sorcerersStone); 
//  // => 'Harry Potter and the Sorcerer's Stone, by J.K. Rowling -- fantasy, $24.99'



let makeBook = (title, author, price, genre, description, imageUrl) => {
    return {
        title: title,
        author: author,
        price: price,
        genre: genre,
        description: description,
        imageUrl: imageUrl
    }
}
//instances 
let HarryPoter = makeBook("Harry Potter and the Sorcerer's Stone",
    "J.K. Rowling", 14, "fantasy", "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world. On his eleventh birthday, Harry Potter (Daniel Radcliffe) discovers that he is no ordinary boy.","https://static.wikia.nocookie.net/harrypotter/images/7/7a/Harry_Potter_and_the_Philosopher%27s_Stone_%E2%80%93_Bloomsbury_2014_Children%27s_Edition_%28Paperback_and_Hardcover%29.jpg/revision/latest?cb=20170109041611"
)

let RomoeAndJuillet = makeBook("Romeo and Juliet","William Shakespeare",8.88,"tragedy",123,"Romeo and Juliet is about a young hero and heroine whose families, the Montagues and the Capulets, respectively, are ferocious enemies. ","https://m.media-amazon.com/images/I/51tr2tTWZxL.jpg"
)
//behaviour 
let displayBook = (book) => {
    return `the book title is ${book.title} written by ${book.author} it cost ${book.price}$`
}