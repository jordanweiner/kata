var add = require('./add');

describe('add suite week 1', function() {
    test('test zero returned when string is empty', function() {
        expect(add("")).toBe(0);
    });

    test('test sum returned when string has 1 num (1 digit)', function() {
        expect(add("1")).toBe(1);
    });

    test('test sum returned when string has 1 num (2 digits)', function() {
        expect(add("10")).toBe(10);
    });

    test('test sum returned when string has 1 num (3 digits)', function() {
        expect(add("100")).toBe(100);
    });

    test('test correct sum return when string has 2 nums', function() {
        expect(add("1,2")).toBe(3);
    });

    test('test correct sum return when string has 2 nums', function() {
        expect(add("20,80")).toBe(100);
    });

    test('test correct sum return when string has 2 nums', function() {
        expect(add("1,2000")).toBe(2001);
    });
});

describe('add suite week 2', function() {
    test('test sum returned of unknown amount of nums', function() {
        expect(add("56,4,40")).toBe(100);
    });

    test('test sum returned of unknown amount of nums', function() {
        expect(add("0,1001,300")).toBe(1301);
    });
    
    test('test sum returned of unknown amount of nums', function() {
        expect(add("4,4,4,8")).toBe(20);
    });

    test('test sum returned with new lines between numbers', function() {
        expect(add("4,4\n4,8")).toBe(20);
    });

    test('test sum returned with new lines between numbers', function() {
        expect(add("3\n4\n4\n4")).toBe(15);
    });

    test('test sum returned with new lines between numbers', function() {
        expect(add("4\n4")).toBe(8);
    });

    test('test sum returned with new lines between numbers', function() {
        expect(add("4\n4\n3")).toBe(11);
    });


});


describe('add suite week 3', function() {
    test('test sum returned with different delimiters', function() {
        expect(add("//;\n1;2")).toBe(3);
    });

    test('test sum returned with different delimeters', function() {
        expect(add("///1/2/3\n4")).toBe(10);
    });

    test('call add with negative number throws exception', function() {
        expect(() => {
            add("//;\n-1;2")
        }).toThrow('negatives not allowed: -1');
    });

    test('call add with negative number throws exception', function() {
        expect(() => {
            add("-10,90\n-45")
        }).toThrow('negatives not allowed: -10 -45');
    });

    test('call add with negative number throws exception', function() {
        expect(() => {
            add("//;\n60;89\n-90\n-100")
        }).toThrow('negatives not allowed: -90 -100');
    });

});
