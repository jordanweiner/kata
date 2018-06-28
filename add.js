function add(a) {
    var delimeter = ',';
    if (a.includes("//")) {
        delimeter = a.charAt(2);  // gets delimeter
    }

    a = a.replace(/[\/]|\n/g, delimeter);    // replace all \n with ,
    var nums = a.split(delimeter);      
    var sum = 0;

    var negativeArray = [];     // holds negative numbers
    var i;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] != "") {
            if (parseInt(nums[i], 10) < 0)
                negativeArray.push(nums[i]);
            else 
                sum += parseInt(nums[i], 10);   // add int of string to sum
        }
    }

    if (negativeArray.length != 0) {
        var exceptionMessage = "negatives not allowed:";
        for (i = 0; i < negativeArray.length; i++) {
            exceptionMessage += (" " + negativeArray[i]);
        }

        throw exceptionMessage;
    }

    return sum;
}

module.exports = add;
