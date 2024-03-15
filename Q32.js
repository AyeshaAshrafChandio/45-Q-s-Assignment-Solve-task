//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// Define current users and new users
// List of current users
var current_users = ["sana", "kashaf", "komal", "admin", "savara"];
// List of new users
var new_users = ["komal", "hasnain", "John", "fatima", "kinza"];
// name check if a username is already taken
function isUsernameTaken(username) {
    return current_users.some(function (user) { return user.toLowerCase() === username.toLowerCase(); });
}
// Loop through new_users and check if each username is available
new_users.forEach(function (username) {
    if (isUsernameTaken(username)) {
        console.log("The username \"".concat(username, "\" is not available. Please choose a different one."));
    }
    else {
        console.log("The username \"".concat(username, "\" is available."));
    }
});
