//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function showMagicians(magicians: string[]): void {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

function makeGreat(magicians: string[]): string[] {
    return magicians.map((magician) => {
        return `the Great ${magician}`;
    });
}

// Array of Pakistani magician names
let pakistaniMagicians: string[] = [
    'Moeen Majeed',
    'Izam Khan',
    'Waqar Khan',
    'Mehran Khan',
    'Ali Jawad'
];

// Call makeGreat function to modify magician names
pakistaniMagicians = makeGreat(pakistaniMagicians);

// Call the function to show modified magician names
showMagicians(pakistaniMagicians);

