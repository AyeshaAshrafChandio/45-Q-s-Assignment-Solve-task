//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.


// Define an array
const numbers: number[] = [1, 2, 3, 4, 5];

//  element from the array
function accessElement(index: number): number | string {
    if (index < 0 || index >= numbers.length) {
        return "Index out of bounds";
    }
    return numbers[index];
}

// accessing elements with valid and invalid 
console.log(accessElement(2)); // Should print: 3
console.log(accessElement(5)); // Should print: Index out of bounds
