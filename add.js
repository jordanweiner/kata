function add(a) {
    // empty string
    if (a.length == 0) {
        return 0;
    }
    // string with 1 number
    else if (!a.includes(",")) {
        return parseInt(a, 10);
    }
    // string with 2 or more numbers
    else {
        var strCopy = a.substring(0);
        var numStr;
        var sum = 0;

        while ( strCopy.includes(',') || strCopy.includes('\n') ) {
            
            numStr = strCopy.substring(0, strCopy.indexOf( findSeparator(strCopy) ));     
            sum += parseInt(numStr, 10);                        // add value to sum
            
            /* Take number we just added to sum out of the string */
            strCopy = strCopy.substring(strCopy.indexOf(findSeparator(strCopy)) + 1, strCopy.length);  
        }

        // add last number to sum
        numStr = strCopy.substring(0, strCopy.length);
        sum += parseInt(numStr, 10);
        return sum;
    }
}

function findSeparator(str) {
    if (str.indexOf(',') < str.indexOf('\n') && str.includes(','))
        return ',';
    else if (str.indexOf(',') >= str.indexOf('\n') && str.includes('\n'))
        return '\n';
}

module.exports = add;
