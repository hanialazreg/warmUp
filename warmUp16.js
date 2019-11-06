// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.
function nbBallon(str) {

	var bArr= ['b', 'a', 'l', 'l', 'o', 'o', 'n'];
	var res=[0, 0, 0, 0, 0, 0, 0];
	var arr = str.split('');
	var min = 0;
	var count = 0;
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; i < bArr.length; j++) {
			if(arr[i] === bArr[j]){
				
				res[j] = res[j]+ 1;
			}
			
		}
		
	}
	
	console.log(res);
	/*for (var i = 0; i < res.length; i++) {
		if(res[i] < min){
			min = res[i];
		}
	}

	return min ;
	*/
	
}