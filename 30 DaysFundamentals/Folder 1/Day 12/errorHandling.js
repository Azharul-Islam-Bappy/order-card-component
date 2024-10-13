function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error('Division by zero is not allowed.');
        }
        return a / b;
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}

console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // An error occurred: Division by zero is not allowed.