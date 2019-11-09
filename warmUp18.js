// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"

function nbOccur(str){
	
	var charArr = str.split();
	var occArr = [];
	var resArr= [];
	var strocc = "";

	for (var i = 0; i < charArr.length - 1; i++) {
		for (var j = 1; i < charArr.length; i++) {
			var occ = exist(charArr, charArr[j]);
			if(occ === 1){
				strocc = strocc + "1";
			}
			else
				strocc = strocc + occ ;
		}
		
	 } 
 	return strocc ;
}
function exist(arr,c){
	var nbseen = 0;
 	for (var i = 0; i < arr.length; i++) {
 		if (arr[i] === c) {
 			nbseen ++ ;

 		}
 	}
 	return nbseen;
}