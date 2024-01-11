// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321
// Example 3:
// Input: x = 120
// Output: 21
 
// Constraints:
// -231 <= x <= 231 - 1

var reverse = function (x) {
    //define the limit
    const max = Math.pow(2, 31) - 1;
    const min = -Math.pow(2, 31);

    // make x positive and define a sign for later return
    const sign = x >= 0 ? 1 : -1;
    x = Math.abs(x);

    //define result inital at 0
    let reversedInterger = 0;

    // pull numbers from x at last digit till it become 0
    while (x !== 0) {

        //this give the last digit of x
        const tail = x % 10;
        // last digit pulled out from x
        x = Math.floor(x / 10)


        if (reversedInterger > (max - tail) / 10) return 0;

        // make last round loop tail times 10 and att current tail till get a reversed version of x
        reversedInterger = reversedInterger * 10 + tail;
    } 

    // make it negative if x was negative
    reversedInterger *= sign; 

    // check if revered number is exceeded the limit
    if(reversedInterger > max || reversedInterger < min) return 0; 


    //here we go~
    return reversedInterger;

};