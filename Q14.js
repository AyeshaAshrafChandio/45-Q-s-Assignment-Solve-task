//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner


//  guests to invite to dinner
var guestList = ["muqadas", "Mahnoor", " kinza"];
// array and  invitation messages
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\n\nYou are  invited to dinner. Please join us for a shining evening.\n\nBest regards,\n[Mehak]"));
});
