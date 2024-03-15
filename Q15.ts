


// Define an array of original guests
const previousGuestList: string[] = ["kashaf", "Muqadas", "Mahnoor"];

// Print the original guest list
console.log("Original Guest List:");
previousGuestList.forEach((guest) => {
    console.log(guest);
});

//  a guest who can't make it
const unableToAttend: string = "Mahanoor";

// Remove the previous guest from the list
const newGuestList: string[] = previousGuestList.filter((guest) => guest !== unableToAttend);

// Add a new guest to the list
const newGuest: string = "Alina";
newGuestList.push(newGuest);

// new guest list
console.log("\nUpdated Guest List:");
newGuestList.forEach((guest) => {
    console.log(guest);
});

//  invitation messages for the new guest list
console.log("\nInvitation Messages:");
newGuestList.forEach((guest) => {
    console.log(`Dear ${guest},\n\nYou are  invited to dinner. 
    Please join us for a delightful dinner party.\n\nBest regards,\n[Mehak]`);
});
