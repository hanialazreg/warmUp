// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here
//1
var firstName = "hania";
var lastName = "lazreg";
var name = firstName + lastName;
//2
function isMultiple(x,y){
	if (x % y === 0) {
		return "is a multiple";

	}
	return "is not multiple";

}
// execute this function using x = 13 and y = 3 
// 3 
function avrageAge(array){
	var age = 0 ;
	for (var i = 0; i < array.length; i++) {
		age = age + array[i];
	}
	return age/ array.length;
}
4//
function ageSecond(n){
	return n*30*60*24*30*12;
}