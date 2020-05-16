// Is even

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

function isEven(num) {
    return num % 2 === 0;
}

// -----------------------------
// Factorial 

function factorial(num) {
    var result = 1;
    for (var i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}