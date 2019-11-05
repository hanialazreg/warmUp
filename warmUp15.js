// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .
function reverseStr(str){
	var resStr = '';
	var fresStr = '';
	var sp = 0;
	for (var i = 0 ; i < str.length; i++) {
		if(str[i] === ' '){
			//sp = i;
			//for (var j = 0; j < sp; j++) {
				resStr = ' ' + resStr ;
				fresStr = resStr ;
			//}
			
			
		}
		resStr = str[i] + ' ' +fresStr ;

		
	}
	return resStr ;

}