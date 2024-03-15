// Define an array of original guests
var previousGuestList = ["kashaf", "Muqadas", "Mahnoor"];
// Print the original guest list
console.log("Original Guest List:");
previousGuestList.forEach(function (guest) {
    console.log(guest);
});
//  a guest who can't make it
var unableToAttend = "Mahanoor";
// Remove the previous guest from the list
var newGuestList = previousGuestList.filter(function (guest) { return guest !== unableToAttend; });
// Add a new guest to the list
var newGuest = "Alina";
newGuestList.push(newGuest);
// new guest list
console.log("\nUpdated Guest List:");
newGuestList.forEach(function (guest) {
    console.log(guest);
});
// Print invitation messages for the new guest list
console.log("\nInvitation Messages:");
newGuestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\n\nYou are  invited to dinner. \n    Please join us for a delightful dinner party.\n\nBest regards,\n[Mehak]"));
});
