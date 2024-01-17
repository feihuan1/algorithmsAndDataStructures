 // time: O(n), space O(1)
 var romanToInt = function (s) {
    // map avoids property lookups during the iteration instead of object.
    const romanNumerals = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
    ])

    let result = 0;

    for (let i = 0; i < s.length; i++) {

        const currentSymbolValue = romanNumerals.get(s[i]);
        const nextSymbolValue = romanNumerals.get(s[i + 1]);

        //if next letter is bigger, value is subtracted reverse way
        if (currentSymbolValue < nextSymbolValue) {
            result += (nextSymbolValue - currentSymbolValue);
            i++;
        } else {
            // add up the value
            result += currentSymbolValue
        }
    }

    return result
};