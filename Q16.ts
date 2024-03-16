//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.//


// Define an array of new guests
let guestList: string[] = ["Alina", "kashaf", "mahnoor"];

// Print the previous guest list
console.log("Previous Guest List:");
guestList.forEach((guest) => {
    console.log(guest);
});

// Inform about the bigger dinner table
console.log("\nGood news! We found a bigger dinner table.");

// Add a new guest to the beginning 
const newGuest1: string = "komal";
guestList.unshift(newGuest1);

// Add a new guest to the middle 
const newGuest2: string = "Ariba";
const middleIndex: number = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, newGuest2);

// Add a new guest to the end
const newGuest3: string = "Laiba";
guestList.push(newGuest3);

// Print the new guest list
console.log("\nUpdated Guest List:");
guestList.forEach((guest) => {
    console.log(guest);
});

// Print invitation messages for the new guest list
console.log("\nInvitation Messages:");
guestList.forEach((guest) => {
    console.log(`Dear ${guest},\n\nYou are cordially invited to dinner.
     Please join us for a delightful evening.\n\nBest regards,\n[Mehak]`);
});
