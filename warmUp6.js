 // 1-implement the function mult that takes a single parameter n, and computes the multiplication of all integers up to n 
 //starting from 0, e.g.:
 mult(3); // => 6
 mult(4); // => 24
 function mult(n) {
 	var mult = 1;

 	while (n > 0){
 		mult = mult*n;
 		n--
 	}
 return mult;
}

// 2- Use a while loop to build a single string with the numbers 1 through n
// separated by the number next to the current number. 
//Have it return the new string.
// eg= 1 2 2 3 3 4 4 5 5 6 6 ...
function nextNumber(n){
	var str ="";
	var i = 1;
	var strf
	while(i<=n){
		str = str + i + (i+1) ;
		i++ ;
	}
	strf = str.substring(0,str.length - 1);
	return strf ;
	// we can use also str.slice(0, str.length - 1)
}