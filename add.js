/* adds however many numbers in a string, separated by user-sepcified
     delimeters */
function add(a) {
    var delimeter = ',';
    if (a.includes("//")) {
        delimeter = getDelimeter(a);  // gets delimeter
    }

    a = a.replace(/[\/]|\n/g, delimeter);    // replace all \n with ,
    var nums = a.split(delimeter);          // array of str numbers
    var sum = 0;
    var negativeArray = [];     // holds negative numbers
    
    var i;
    /* Go through all the numbers in the string */
    for (i = 0; i < nums.length; i++) {
        if (nums[i] != "") {
            if (parseInt(nums[i], 10) < 0)
                negativeArray.push(nums[i]);
            else 
                sum += parseInt(nums[i], 10);   // add int of string to sum
        }
    }

    /* Go through all the negatives */
    if (negativeArray.length != 0) {
        var exceptionMessage = "negatives not allowed:";
        for (i = 0; i < negativeArray.length; i++) {
            exceptionMessage += (" " + negativeArray[i]);
        }

        throw exceptionMessage;
    }

    return sum;
}

/* returns the user-specified delimeter */
function getDelimeter(str) {
    return str.charAt(2);
}

module.exports = add;
