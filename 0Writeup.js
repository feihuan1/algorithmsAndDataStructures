var firstMissingPositive = function(nums) {
    const range = nums.length + 1; 
    const set = new Set(nums); 
    console.log(set)
    for( let i = 1; i < range + 1; i ++) { 
        console.log(i)
        console.log(set.has(i))
        if(!set.has(i)) {
            return i
        }
        
    }
};

console.log(firstMissingPositive([1]))