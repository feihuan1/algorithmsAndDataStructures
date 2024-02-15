var groupAnagrams = function (strs) {
    const anagramsMap = new Map(); 

    for (let word of strs) {
        const sortedWord = word.split('').sort().join('') 
        if(anagramsMap.has(sortedWord)) {
            anagramsMap.get(sortedWord).push(word)
        } else {
            anagramsMap.set(sortedWord, [word])
        }
    }

    return Array.from(anagramsMap.values())
    
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))