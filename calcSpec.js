
/**
 * Created by dzejdzi on 12/09/2016.
 */
describe("Hello world", function() {
    it("says hello", function() {
        expect(helloWorld()).toEqual("Hello world!");
    });
});
/*

 testSum(3, 4, 7);
 testSum("3", "8", 11);
 testSum(4, "cos", NaN);


 */
describe('when add 3 and 4', function () {
    it("gives 7", function () {
        expect(Calc.sum(3,4)).toEqual(7);
    });
});

describe('when add \"3\" and \"8\"', function () {
    it("gives 11", function () {
        expect(Calc.sum("3","8")).toEqual(11);

    });
});

describe('when add 4  and \"cos\"', function () {
    it("gives NaN", function () {
        expect(Calc.sum(4,"cos")).toEqual(NaN);

    });
});
/*
 testSubtract(50, 2, 48);
 testSubtract(5, 15, -10);
 testSubtract("cos", 2, NaN);
 testSubtract(6, -2, 8);
 */

describe('when subtract 50  and 2', function () {
    it("gives 48", function () {
        expect(Calc.subtract(50,2)).toEqual(48);
    });
});

describe('when subtract 5  and 15', function () {
    it("gives -10", function () {
        expect(Calc.subtract(5,15)).toEqual(-10);
    });
});

describe('when subtract \"cos\"  and 2', function () {
    it("gives Nan", function () {
        expect(Calc.subtract("cos",2)).toEqual(NaN);
    });
});

describe('when subtract 6  and -2', function () {
    it("gives 8", function () {
        expect(Calc.subtract(6,-2)).toEqual(8);
    });
});

/*
 testMultiple(8, 9, 72);
 testMultiple("1", 9, 9);
 */

describe('when subtract 8  and 9', function () {
    it("gives 72", function () {
        expect(Calc.multiple(8,9)).toEqual(72);
    });
});

describe('when subtract \"1\"  and 9', function () {
    it("gives 9", function () {
        expect(Calc.multiple("1",9)).toEqual(9);
    });
});

/*
 testDivision(72, 9, 8);
 testDivision(1, 2, 0.5);
 testDivision(6, 0, Infinity);
 */

describe('when divide \"72\"  and 9', function () {
    it("gives 8", function () {
        expect(Calc.division("72",9)).toEqual(8);
    });
});

describe('when divide 72  and 9', function () {
    it("gives 8", function () {
        expect(Calc.division(72,9)).toEqual(8);
    });
});

describe('when divide 1  and 2', function () {
    it("gives 0.5", function () {
        expect(Calc.division(1,2)).toEqual(0.5);
    });
});

describe('when divide 6  and 0', function () {
    it("gives Infinity", function () {
        expect(Calc.division(6,0)).toEqual(Infinity);
    });
});