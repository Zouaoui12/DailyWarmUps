// 1-using + operator create a function 
//that combine your partner first and last name and return it.*//

// function declaration
function MyPartnerName(firstname, lastname) {
	// return firstname+" "+lastname  
	return firstname.concat(" ", lastname)
}
// function expression 

let myPartnerName = function (firstname, lastname) {
	return firstname.concat(" ", lastname)

}

// arrow function 

let PartnerName2 = (firstName, lastName) => firstName.concat(" ", lastName)

// 2-create a function that return true 
// if the number 13 is a multiple of 3 and false if not.*//

function MultipleOf13orNot() {
	if (13 % 3 === 0) {
		return true
	}
	else { return false }
}
// function expression 
let MultipleOf13orNot = function () {
	if (13 % 3 === 0) {
		return true
	}
	else { return false }
}


// arrow function 
let MultipleOf13orNot2 = () => {
	if (13 % 3 === 0) {
		return true
	}
	else { return false }
}

// 4-create a function that takes a age as a parametre and return that age in seconds.*//

function AgeInSeconds(age) {
	return age * 365 * 24 * 60 * 60
}

// function expression 

let AgeInSeconds = function (age) {
	return age * 365 * 24 * 60 * 60
}

// arrow function 

let AgeInSeconds1 = age => age * 365 * 24 * 60 * 60
























