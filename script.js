/**
 * Created by dzejdzi on 09/09/2016.
 */
"use strict";
var Calc,
    arg1,
    arg2,
    sub,
    calcForm;

Calc = {
    multiple: function (a, b) {
        return a * b;
    },
    division: function (a, b) {
        return a / b;
    },
    sum: function (a, b) {
        return parseFloat(a) + parseFloat(b);
    },
    subtract: function (a, b) {
        return a - b;
    }

};

arg1 = document.getElementById("arg1");
arg2 = document.getElementById("arg2");
sub = document.getElementById("submit");
calcForm = document.getElementById("calc-form");

calcForm.addEventListener("submit", function (e) {
    var arg1Val, arg2Val, operation;

    arg1Val = arg1.value;
    arg2Val = arg2.value;

    e.preventDefault();

    operation = document.querySelector("input[name = 'operation']:checked").value;
    document.getElementById("r_result").value = Calc[operation](arg1Val, arg2Val);


});

function executeTests() {
    testMultiple(8, 9, 72);
    testMultiple("1", 9, 9);
    testDivision(72, 9, 8);
    testDivision(1, 2, 0.5);
    testDivision(6, 0, Infinity);
    testSum(3, 4, 7);
    testSum("3", "8", 11);
    testSum(4, "cos", NaN);
    testSubtract(50, 2, 48);
    testSubtract(5, 15, -10);
    testSubtract("cos", 2, NaN);
    testSubtract(6, -2, 8);
}

function isEqualAssertion(operation, args, actual, expected) {
    if (actual !== expected) {
        document.getElementById("results").innerHTML += operation + ': '+ args[0] + ' and ' + args[1] + ' -> Expected ' + expected + ', but was ' + actual + '. Check tests <br />';
    } else {
        document.getElementById("results").innerHTML += operation + ': '+ args[0] + ' and ' + args[1] + ' -> Everything is ok! Expected ' + expected + ', and it was ' + actual + ' indeed. <br />';
    }
}

function testMultiple(arg1, arg2, expected) {
    var actual = Calc.multiple(arg1, arg2);
    isEqualAssertion("multiple", arguments, actual, expected);
}

function testDivision(arg1, arg2, expected) {
    var actual = Calc.division(arg1, arg2);
    isEqualAssertion("division", arguments, actual, expected);
}

function testSubtract(arg1, arg2, expected) {
    var actual = Calc.subtract(arg1, arg2);
    isEqualAssertion("subtract", arguments, actual, expected);
}

function testSum(arg1, arg2, expected) {
    var actual = Calc.sum(arg1, arg2);
    isEqualAssertion("sum", arguments, actual, expected);
}

executeTests();

