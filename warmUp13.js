/* 1. Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

        Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

        Example:

            solution('XXI'); // should return 21

        Help:

            Symbol    Value
            I          1
            V          5
            X          10
            L          50
            C          100
            D          500
            M          1,000 
    

    2. Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
        Examples:

        toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

        toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
    
    3. In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
        Example

            filter_list([1,2,'a','b']) == [1,2]
            filter_list([1,'a','b',0,15]) == [1,0,15]
            filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

function solution(str){
	// speliting the string of roman numbers then, and than compare with the value of decimal and return the decimal number  
	var res = 0;
	// strSp an array that contain the string splited 
	var strSp = str.split('');
	for (var i = 0; i < strSp.length; i++) {
		res = res +convert(strSp[i]);
	}
	return res ;

}

function convert(element){
	var somme = 0;
	if(element === 'I'){
		somme = 1 ;
	}
	else if(element === 'V'){
		somme = 5 ;
	}
	else
		 if (element === 'X'){
		 	somme = 10 ;
		 }
		if(element === 'L'){
		somme = 50 ;
	}
	else if(element === 'C'){
		somme = 100 ;
	}
	else
		 if (element === 'D'){
		 	somme = 500;
		 }
		 else
		 	if (element === 'M') {
		 		somme = 1000 ;
		 	}

 	return somme ;
}

function filter_list(arr){
	var res = [];
	for (var i = 0; i < arr.length; i++) {
		if(isnum(arr[i]))
			res.push(arr[i]);
	}
	return res ;
}
function isnum(element){
	if(element === 0 || element === 1 || element === 2 || element === 3 || element === 4 || element === 5 || element === 6 || element === 7 || element === 8 || element === 9  ){
		return true ;
	}
}