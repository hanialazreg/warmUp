/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range

Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
    Test Example

    let inputString = '1568141291110137';

    mysteryRange(inputString,10) // [6,15]

        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100
 */


 function mysterRange(inputString,n){
// we split the string to n part the result will be an array of strings 
// we iterate the array to sort the min and the max integer of each elemnt 
// push the min and the max to an array having the length 2( two element the min and the max)
// return this array 

 	var resultArr = [];
 	var max = 0;
 	var min = 0;
 	var rg = [];
// get the n numbers of the string 

 	var arr = inputString.split('');
    
// get min  and max
 	for (var i = 0;  i< arr.length ; i++) {
 		for (var j = 0; j < arr[i].length; j++) {
 			rg = arr[i].split('');
 			if(max < rg[j]){
 				max = rg[j];
 			}
 			if(min > rg[j]){
 				min = rg[j];
 			}

 			}
 		}
 		
 	} 

 	//push to resultArr
 	resultArr.push(min);
 	resultArr.push(max);
 	return resultArr;
}



 /*function dividing(str){
 	for (var i = 0; i < str.length; i++) {
 	 Input " give a number"; 
 	}
 }
 */