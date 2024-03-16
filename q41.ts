//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function showMagicians(magicians: string[]): void {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

// Array of Pakistani magician names
const pakistaniMagicians: string[] = [
    'Moeen Majeed',
    'Izam Khan',
    'Waqar Khan',
    'Mehran Khan',
    'Ali Jawad'
];

//  the function to show Pakistani magician names
showMagicians(pakistaniMagicians);
