function getNumber(a, b) {
    console.log(a);
    return a + b;
}

function subtractNumber(a, b) {
    return a - b;
}

function doMultiply(a, b) {
    return a * b;
}

function doDivide(a, b) {
    return a/b;
}

function doOperation(a, b, fn) {
    return fn(a, b);
}

var result = doOperation(5, 10, getNumber);
console.log(result);
console.log(result + 20);
var result2 = doOperation(5, 10, subtractNumber);
