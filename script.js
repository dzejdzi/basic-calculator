/**
 * Created by jbgc on 09/09/2016.
 */
 "use strict";
var Calc,
    arg1,
    arg2,
    sub,
    calcForm;

Calc = {
    multiple: function(a, b) {
        return a * b;
    },
    division: function(a, b) {
        return a / b;
    },
    sum: function(a, b) {
        return parseFloat(a) + parseFloat(b);
    },
    subtract: function(a, b) {
        return a - b;
    }

};

arg1 = document.getElementById("arg1");
arg2 = document.getElementById("arg2");
sub = document.getElementById("submit");
calcForm = document.getElementById("calc-form");

calcForm.addEventListener("submit", function(e) {
    var arg1Val, arg2Val, testIndex = 0, operation;

    arg1Val = arg1.value;
    arg2Val = arg2.value;

    e.preventDefault();

    operation = document.querySelector("input[name = 'operation']:checked").value;
    document.getElementById("r_result").value = Calc[operation](arg1Val, arg2Val);

    function test(method, args1, args2, expected) {
        var actual = Calc[method](args1, args2);
        if (actual !== expected) {
            console.log(testIndex + " : " + method + " -> Expected " + expected + ", but was " + actual + ". Check test: " + testIndex);
        } else {
            console.log(testIndex + " : " + method + " -> Everything is ok! Expected " + expected + ", and it was " + actual + " indeed.")
        }
        testIndex++;
    }

    test("multiple", 8, 9, 72);
    test("multiple", "1", 9, 9);
    test("division", 72, 9, 8);
    test("division", 1, 2, 0.5);
    test("division", 6, 0, Infinity);
    test("sum", 3, 4, 7);
    test("sum", "3", "8", 11);
    test("sum", 4, "cos", NaN);
    test("subtract", 50, 2, 48);
    test("subtract", 5, 15, -10);
    test("subtract", "cos", 2, NaN);
    test("subtract", 6, -2, 8);
});

