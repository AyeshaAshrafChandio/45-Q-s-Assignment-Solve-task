//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.//



// Define an array of new guests
var guestList = ["Alina", "kashaf", "mahnoor"];
// Print the previous guest list
console.log("Previous Guest List:");
guestList.forEach(function (guest) {
    console.log(guest);
});
// Inform about the bigger dinner table
console.log("\nGood news! We found a bigger dinner table.");
// Add a new guest to the beginning 
var newGuest1 = "komal";
guestList.unshift(newGuest1);
// Add a new guest to the middle 
var newGuest2 = "Ariba";
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, newGuest2);
// Add a new guest to the end
var newGuest3 = "Laiba";
guestList.push(newGuest3);
// Print the new guest list
console.log("\nUpdated Guest List:");
guestList.forEach(function (guest) {
    console.log(guest);
});
// Print invitation messages for the new guest list
console.log("\nInvitation Messages:");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\n\nYou are cordially invited to dinner.\n     Please join us for a delightful evening.\n\nBest regards,\n[Mehak]"));
});
