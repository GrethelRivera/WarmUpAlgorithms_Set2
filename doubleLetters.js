function hasConsecutiveIdenticalLetters(word) {
for(let i = 0; i < word.length; i++) {
    if(word[i-1] === word[i]) {
        return true; 
    }
}
 return false;

}

console.log(hasConsecutiveIdenticalLetters("loop"))
console.log(hasConsecutiveIdenticalLetters("yummy"))


// Create a function that takes a word and returns 
// true if the word has two consecutive identical letters.