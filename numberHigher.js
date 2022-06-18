function existsHigher(arr, n) {
	for (i = 0; i < arr.length; i++){
		
	if (arr[i] >= n ) {
		return true;
	}
	}
	return false;
}




// Write a function that returns true if there exists at least one number 
//that is larger than or equal to n.