//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false
function isSubset(array, sub){
	result = false ;
for (var i = 0; i < sub.length; i++) {
	if (find(array, sub[i])) {
		result = true
	}
	
}
	return result ;
}
function find(array,element){
	var fnd = false;
	for (var i = 0; i < array.length; i++) {
		if(element === array[i]){
			var fnd = true ;
		}
		
	}
	return fnd ;
}