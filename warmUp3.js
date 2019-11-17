// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 
var females = ["hania", "houda", "lina", "ons", "insaf","amira", "foz"];
var males = ["mahdi", "amine", "taha", "anas", "ahmad", "ali", "hamza"];
var instructors = ["omar", "saif", "youssef", "matt", "raghda"];

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
function middelOfArray(array){
	if(array.length === 0){
		return "empty array";
	}
	return array[Math.floor(array.length / 2)];

}

// 3-Change all the numbers in the array to be multiplied by two for even indexes.
function multEvenIndex(array){
	for (var i = 0; i < array.length; i++) {
		if (i % 2 === 0) {
			array[i] = array[i]* 2 ;
		}
	}
	return array ;

}