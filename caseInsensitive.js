function match(x, y) {
    if(x.toUpperCase() === y.toUpperCase()) {
      return true;
    } else {
      return false;
    }};

console.log(match ("hello", "heLLo"))
// Returns "true"


// Write a function that validates whether two strings are identical. 
// Make it case insensitive.