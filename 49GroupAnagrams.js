// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// time:O(n * k log k) space:O(n)

var groupAnagrams = function (strs) {
    // Create a map to store anagrams where the key is the sorted word and the value is an array of anagrams
    const anagramsMap = new Map(); 

    // Iterate through each word in the input array
    for (let word of strs) {
        // Sort the characters of the word to get its unique representation
        const sortedWord = word.split('').sort().join('') 
        
        // If the sorted word is already a key in the map, add the current word to its corresponding array
        if(anagramsMap.has(sortedWord)) {
            anagramsMap.get(sortedWord).push(word)
        } else {
            // Otherwise, create a new key with the sorted word and initialize its array with the current word
            anagramsMap.set(sortedWord, [word])
        }
    }

    // Return an array containing the arrays of grouped anagrams [anagramsMap.values()] will be wrong
    return Array.from(anagramsMap.values());
};