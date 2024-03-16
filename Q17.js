//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.




// Define an array of original guests
var guestList = ["Komal", "Kashaf", "Mahnoor", "Alina", "Muqadas", "maria"];
// Print the  guest list
console.log("previous Guest List:");
guestList.forEach(function (guest) {
    console.log(guest);
});
// Inform that only two people can be invited for dinner
console.log("\nSorry, the new dinner table won’t arrive in time, and we can only invite two people for dinner.");
// Remove guests until only two names remain in the list
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Print invitation messages to the two remaining guests
console.log("\n".concat(guestList[0], ", you're still invited to dinner."));
console.log("".concat(guestList[1], ", you're still invited to dinner."));
// Remove the last two names from the list
guestList.pop();
guestList.pop();
// Print the updated guest list to ensure it's empty
console.log("\nUpdated Guest List:");
console.log(guestList);
