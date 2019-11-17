// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"
function reverseStr(str){
	var strResalt = "";
	var i = str.length - 1 ;
	var j = 0 ;
	var resalt = "";
	while(i >= 0 ){
		strResalt = strResalt + j + str[i];
		i -- ;
		j ++ ;
	}
	var resArr = strResalt.split('');
	for (var i = 1; i < resArr.length; i++) {
		 var resalt =  resalt + resArr[i];
	}
	return resalt ;
}

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]
function sameLength(array){
	var arrSame = [];
	for (var i = 0; i < array.length; i++) {
		for (var j = 1; j < array.length - 1; j++) {
			if (array[i].length === array[j].length) {
				arrSame.push(array[i]);
				arrSame.push(array[j]);
				
			}
		}
		
	}
	return arrSame ;
}