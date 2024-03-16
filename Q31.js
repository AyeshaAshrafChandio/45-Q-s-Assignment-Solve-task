//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.//
// Define an array of usernames
var usernames = ["sana", "admin", "kashaf", "admin", "komal"];
// to greet users based on their username
function greetUsers(usernames) {
    if (usernames.length === 0) {
        console.log("We need to find some users!");
    }
    else {
        for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
            var username = usernames_1[_i];
            if (username === 'admin') {
                console.log("Hello admin, would you like to see a status report?");
            }
            else {
                console.log("Hello ".concat('Eric', ", thank you for logging in again."));
            }
        }
    }
}
// Call the greetUsers function with the array of usernames
greetUsers(usernames);
// Remove all usernames
usernames = [];
// Call greetUsers again after removing all usernames
greetUsers(usernames);
