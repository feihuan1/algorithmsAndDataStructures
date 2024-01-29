// 29. Divide Two Integers

// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

// The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

// Return the quotient after dividing dividend by divisor.

// Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.

// time: O(n * log n)

var divide = function(dividend, divisor) {
    // math.sign returns -1, 1 or 0
    const isNegative = Math.sign(dividend) !== Math.sign(divisor); 

    // make params both positive
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    // initial result = 0
    let res = 0;

    // keep runing as long as divided is smaller or equal
    while(divisor <= dividend) {
        let value = divisor; 
        let multiple = 1; 
        // keep douple the value till it will bigger than dividned
        // multiple too
        while(value + value <= dividend) {
            value += value; // 2, 4, 8 * divisor
            multiple += multiple;// 2, 4, 8, 16
        } 
        // subtract from dividend and add to multiple and run it again from 2*divisor
        dividend -= value; 
        res += multiple;
    }
    
    res = Math.min(res, 2**31 - (isNegative? 0: 1)); 

    return isNegative? -res : res;

};